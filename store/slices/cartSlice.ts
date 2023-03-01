import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartSliceDto {
  id?: string,
  title?: string,
  price?: number,
  image?: string
} 

interface InitialState {
  items: CartSliceDto[]
}

const cartSlice: InitialState = {
  items: []
}

export const slice = createSlice({
  name: 'CartAdd',
  initialState: cartSlice,
  reducers: {
    cartAdd: (state, action: PayloadAction<CartSliceDto>) => {
      state.items.push(action.payload)
    }
  }
})

export const { cartAdd } = slice.actions

export default slice.reducer