import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from 'redux/store'

interface GlobalState {
  isMobile: boolean
}

const initialState: GlobalState = {
  isMobile: false
}

export const globalSlice = createSlice({
  name: 'global',

  initialState,
  reducers: {
    platform: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload
    }
  }
})

export const { platform } = globalSlice.actions

export const selectPlatform = (state: RootState) => state.global

export default globalSlice.reducer
