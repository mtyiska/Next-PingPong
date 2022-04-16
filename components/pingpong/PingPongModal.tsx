import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {useModal} from "../hooks"
import { generateRandomNumber, generateRandomUser1, generateRandomUser2 } from '../../utils/helper';
import {v4 as uuid} from "uuid"
import { PingPongGameState } from '../../redux/features/pingPongSlice';
import {usePinPong} from "../hooks"
import { API } from 'aws-amplify'
import {createGame, createPlayer, updatePlayer } from '../../src/graphql/mutations'
import {playerByName } from '../../src/graphql/queries'
import { RankStat, } from '../../redux/features/rankSlice';
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height:500
};


const PingPongModal:React.FC = () => {
  const tableData = useSelector((state: RootState) => state.playerRank)
  const [gameResult, setGameResult] = React.useState<PingPongGameState>(
    {
      id: '',
      winner:'',
      name:''
    }
  )

  const {toggleModal, isModalOpen} = useModal()
  const {submitGameStats, addRank, updateRanks} = usePinPong()
  const [playerOneUser,setPlayerOneUser] = React.useState<string>('')
  const [playerTwoUser,setPlayerTwoUser] = React.useState<string>('')
  const [playerOneScore,setPlayerOneScore] = React.useState(0)
  const [playerTwoScore,setPlayerTwoScore] = React.useState(0)


  React.useEffect(() =>{
    generateNewGameStat()
  }, [isModalOpen])

  const generateNewGameStat = () =>{
    const score1 = generateRandomNumber();
    const score2 = generateRandomNumber();
    const playerOne = generateRandomUser1();
    const playerTwo = generateRandomUser2();

    setPlayerOneUser(playerOne)
    setPlayerTwoUser(playerTwo)
    setPlayerOneScore(score1)
    setPlayerTwoScore(score2)

    const newGame = {
      id: uuid(),
      name: `Ping Pong Match`,
      winner:score1 > score2?playerOne:playerTwo,
    }
    setGameResult(newGame);
  }


  const submitGameReslts = async ()=>{
    const gameId = await createPingPongGame()
    // console.log("CREATE NEW GAME", gameId)
    let playerOneWins = 0;
    let playerTwoWins = 0;
    if(gameResult.winner === playerOneUser ){
      playerOneWins = 1;
    }
    if(gameResult.winner === playerTwoUser ){
      playerTwoWins = 1;
    }
    if(!gameId)return
    await upsertPlayer(gameId, playerOneUser, playerOneScore, playerOneWins)
    await upsertPlayer(gameId, playerTwoUser, playerTwoScore, playerTwoWins)
  }


  async function createPingPongGame(): Promise<string | undefined>{
    // console.log("CREATING GAME")
    try {
      const {data}:any = await API.graphql({
        query: createGame, 
        variables: { input:gameResult},
        authMode: "AMAZON_COGNITO_USER_POOLS"
      })
      
      return data.createGame.id
    } catch (error) {
      console.log(error)
    }
  }

  const upsertPlayer = async (gameId:string, playerName:string, score:number, wins: number)=>{
    const data = await checkUserExist(playerName)
    console.log("RESPONSE FROM CHECK",data)
    if(data.length === 0 ) {
      const {createPlayer} = await createPlayerRank(
        gameId, 
        playerName,
        wins,
        score)
        addRank(createPlayer)
      return createPlayer
    }
    console.log("Updating  player", data[0])
    const player = data[0]
    const {updatePlayer} = await updatePlayerStats(player.id, player.wins,score, gameId )
    const updatedTable = tableData.filter(i=>i.name !== updatePlayer.name)
    updateRanks([...updatedTable, updatePlayer])
    return updatePlayer
  }

  async function checkUserExist(name:string){
    // console.log("NAME THAT IS CHECKING IS", name)
    try {
      const {data}:any = await API.graphql({
        query: playerByName, 
        variables: { name},
      })
      return data.playerByName.items
    } catch (error) {
      console.log()
    }
 
  }

  async function createPlayerRank(gamePlayersId:string, name: string, wins:number, score:number) {   
    try {
      const player = {
        id: uuid(),
        playerByRank: "Rank",
        wins,
        score,
        gamePlayersId,
        name
      }
      const {data}:any = await API.graphql({
        query: createPlayer, variables: { input: player},
        authMode: "AMAZON_COGNITO_USER_POOLS"
      })
      
      if(!data) return
      return data
    } catch (error) {
      console.log(error)
    } 

  }
  
  async function updatePlayerStats(id: string, wins:number, score:number, gamePlayersId:string){
    try {
      const input ={
        id,
        wins: wins + 1,
        score,
        gamePlayersId
      }
      const {data}:any = await API.graphql({
        query: updatePlayer, 
        variables: { input},
        authMode: "AMAZON_COGNITO_USER_POOLS"
      })
      return data
      
    } catch (error) {
      console.log()
    }

  }



  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={() => toggleModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className='flex flex-col space-y-3'>
                <div className='border-b-2'>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                   Winner! {gameResult?.winner}
                    </Typography>
                </div>
                <div className="flex justify-center space-x-4 px-4 py-4 text-lg text-center text-gray-700 ">
                  <div className='flex flex-col'>
                    <div className='border-b'>
                      {playerOneUser} Score
                    </div>
                      {playerOneScore}
                  </div>

                  <div className='flex flex-col'>
                    <div className='border-b'>
                      {playerTwoUser} Score
                    </div>
                    {playerTwoScore}
                  </div>

                </div>
                <div className="flex-row px-4 text-sm text-center text-gray-700 py-4"> 
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Winning Score
                    </Typography>
                    <div className='text-4xl'>
                      {gameResult&& Math.max(playerOneScore, playerTwoScore)}
                    </div>       
                </div>
                <div className='flex justify-center'>
                    <button 
                    
                        // onClick={() => {submitGameStats(gameResult); toggleModal()}} 
                        onClick={() => {submitGameReslts(); toggleModal()}} 
                          className="px-5 bg-green-500 rounded-md shadow-lg w-full py-3 shadow-gray-300">
                        Submit Results
                    </button>
                </div>
            </div>
            
        </Box>
      </Modal>
    </div>
  );
}

export {PingPongModal}
