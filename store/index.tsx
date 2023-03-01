import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    // Add Reducers
    cartState: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch