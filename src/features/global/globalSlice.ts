import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../../redux/store'

interface GlobalState {
  isMobile: boolean
  language: string
}

const initialState: GlobalState = {
  isMobile: false,
  language: localStorage.getItem('language') || 'en'
}

export const globalSlice = createSlice({
  name: 'global',

  initialState,
  reducers: {
    platform: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    }
  }
})

export const { platform } = globalSlice.actions

export const { setLanguage } = globalSlice.actions

export const selectPlatform = (state: RootState) => state.global

export default globalSlice.reducer
