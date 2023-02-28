import { createSlice } from '@reduxjs/toolkit'

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
    changeCartAdd(state, { payload }) {
      return { ...state, CartSlice: payload }
    }
  }
})

export const { changeCartAdd } = slice.actions

export default slice.reducer