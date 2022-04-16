import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
  isOpen: boolean
}

const initialState: ModalState = {
  isOpen: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle: (state) => {
        state.isOpen = !state.isOpen
    },
  },
})

export const { toggle } = modalSlice.actions

export default modalSlice.reducer