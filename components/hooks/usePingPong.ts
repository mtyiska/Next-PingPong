import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { submitGameResults, PingPongGameState  } from '../../redux/features/pingPongSlice'
import {updatePlayerRanks, RankStat, addPlayerRank} from "../../redux/features/rankSlice"

function usePinPong() {
    const pingPongGameStats = useSelector((state: RootState) => state.gameStats)
    const dispatch = useDispatch()
    const submitGameStats = (payload:PingPongGameState) => dispatch(submitGameResults(payload))
    const updateRanks = (payload:RankStat[]) => dispatch(updatePlayerRanks(payload))
    
    const addRank = (payload:RankStat) => dispatch(addPlayerRank(payload))
    return {pingPongGameStats,submitGameStats, updateRanks, addRank}
}

export {usePinPong}