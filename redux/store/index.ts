import { configureStore } from '@reduxjs/toolkit'
import {modalSlice, pingPongSlice, sideBarSlice, authSlice, rankSlice} from '../features'

export const store = configureStore({
  reducer: {
    gameStats: pingPongSlice.reducer,
    isModalOpen: modalSlice.reducer,
    isSidbarOpen: sideBarSlice.reducer,
    isAuthenticated: authSlice.reducer,
    playerRank: rankSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch