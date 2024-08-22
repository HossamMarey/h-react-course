import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
  name: 'logged',
  initialState: {
    isLogged: false
  },
  reducers: {
    login: (state) => {
      state.isLogged = true
    },
    logout: (state) => {
      state.isLogged = false
    }
  }
})
export const { login, logout } = loggedSlice.actions
export default loggedSlice.reducer