import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartSliceDto {
  id?: string,
  title?: string,
  price?: number,
  image?: string,
  amount?: number 
} 

interface InitialState {
  items: CartSliceDto[],
  notification: boolean
}

const cartSlice: InitialState = {
  items: [],
  notification: false
}

export const slice = createSlice({
  name: 'CartAdd',
  initialState: cartSlice,
  reducers: {
    cartAdd: (state, action: PayloadAction<CartSliceDto>) => {
      state.items.push(action.payload)
    },
    cartRemove: (state, action: PayloadAction<CartSliceDto>) => {
      const elemIndex = state.items.findIndex(item => item.id === action.payload.id)
      state.items.splice(elemIndex, 1)
    },
    cartNotify: (state, action: PayloadAction<boolean>) => {
      state.notification = action.payload
    },
    itemIncrement: (state, action: PayloadAction<string>) => {
      const elemIndex = state.items.findIndex(item => item.id === action.payload)
      state.items[elemIndex].amount += 1
    },
    itemDecrement: (state, action: PayloadAction<string>) => {
      const elemIndex = state.items.findIndex(item => item.id === action.payload)
      state.items[elemIndex].amount -= 1
    },
    resetState: () => {
      return cartSlice
    }
  }
})

export const { cartAdd, cartRemove, cartNotify, itemIncrement, itemDecrement, resetState } = slice.actions

export default slice.reducer