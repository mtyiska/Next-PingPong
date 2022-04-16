import { 
  Box, 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import { PingPongGameState } from '../../redux/features/pingPongSlice'
import { PingPongModal } from "./PingPongModal";

const PingPongList = () => {
  const tableData = useSelector((state: RootState) => state.gameStats)
  
  return (
    <Box >
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>GameId</TableCell>
            <TableCell >Winner</TableCell>
            <TableCell >Player One</TableCell>
            <TableCell >Player One Score</TableCell>
            <TableCell >Player Two</TableCell>
            <TableCell >Player Two Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
     
          {tableData && tableData.map((row:PingPongGameState, i:number) =>
            <TableRow
              key={row.gameId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.gameId}
              </TableCell>
              <TableCell >{row.winner}</TableCell>
              <TableCell >{row.playerOne}</TableCell>
              <TableCell >{row.playerOneScore}</TableCell>
              <TableCell >{row.playerTwo}</TableCell>
              <TableCell >{row.playerTwoScore}</TableCell>
            </TableRow>
          )
          }
        </TableBody>
      </Table>
    </TableContainer>
    <PingPongModal/>
    </Box>
  )
}

export {PingPongList}