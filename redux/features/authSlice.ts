import { createSlice, } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean
}

const initialState: AuthState = {
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true
    },
    removeAuth: (state) => {
        state.isAuthenticated = false
      }
  },
})

// Action creators are generated for each case reducer function
export const { authenticate, removeAuth } = authSlice.actions

export default authSlice.reducer