import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'
import loggedReducer from './features/loggedSlice'
import usersReducer from './features/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    logged: loggedReducer,
    users: usersReducer
  }
})