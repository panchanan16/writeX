import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './combineSlice'

export const store = configureStore({
  reducer: rootReducer,
})