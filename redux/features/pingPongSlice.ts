import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PingPongGameState {
  id: string,
  winner:string,
  name:string
}


const initialState = [] as PingPongGameState[]

export const pingPongSlice = createSlice({
  name: 'pingpong',
  initialState,
  reducers: {
    submitGameResults: (state, action: PayloadAction<PingPongGameState>) => {
      state.push(action.payload)
    }
  },
})


export const { submitGameResults,  } = pingPongSlice.actions

export default pingPongSlice.reducer