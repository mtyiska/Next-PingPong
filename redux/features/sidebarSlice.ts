import { createSlice, } from '@reduxjs/toolkit'

export interface SideBarState {
  isOpen: boolean
}

const initialState: SideBarState = {
  isOpen: false,
}

export const sideBarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = sideBarSlice.actions

export default sideBarSlice.reducer