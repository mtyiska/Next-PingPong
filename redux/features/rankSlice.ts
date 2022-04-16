import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface RankStat {
  id: string,
  playerByRank:string,
  wins:number,
  score:number,
  name:string
}

const initialState = [] as RankStat[]

export const rankSlice = createSlice({
  name: 'playerRank',
  initialState,
  reducers: {
    addPlayerRank: (state, action: PayloadAction<RankStat>) => {
      console.log("Adding Rank in Slice", action.payload)
      state.push(action.payload)
      state.sort((a, b) => b.wins - a.wins);
      return state;
    },
    updatePlayerRanks: (state, action: PayloadAction<RankStat[]>) => {
      console.log("Updating Rank in Slice", action.payload)
      state = [...action.payload]
      state.sort((a, b) => b.wins - a.wins);
      return state;
    },
  },
})


export const { updatePlayerRanks, addPlayerRank } = rankSlice.actions

export default rankSlice.reducer