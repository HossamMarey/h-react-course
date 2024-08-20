import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    showCounter: true
  },
  reducers: {
    // actions 
    increment: (state) => {
      state.count += 1
    },
    incrementValue: (state, { payload }) => {

      state.count += payload
    },
    decrement: (state) => {
      state.count -= 1
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter
    }
  }
})

export const { increment, decrement, toggleCounter, incrementValue } = counterSlice.actions

export default counterSlice.reducer