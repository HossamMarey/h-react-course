import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk('users/users/', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!res.ok) throw new Error('Failed to fetch users')
  const data = await res.json()
  return data
})


const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null
  },
  reducers: {},
  // extraReducers: {
  //   [getUsers.pending]: (state, { payload }) => {
  //     state.error = null
  //     state.isLoading = true
  //     state.users = []
  //   },
  //   [getUsers.fulfilled]: (state, { payload }) => {
  //     state.error = null
  //     state.isLoading = false
  //     state.users = payload
  //   },

  //   [getUsers.rejected]: (state, { payload }) => {
  //     state.error = payload || 'An error occurred'
  //     state.isLoading = false
  //     state.users = []
  //   },
  // }
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, { payload }) => {
      state.error = null
      state.isLoading = true
      state.users = []
    })
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      state.error = null
      state.isLoading = false
      state.users = payload
    })
    builder.addCase(getUsers.rejected, (state, { payload }) => {
      state.error = payload || 'An error occurred'
      state.isLoading = false
      state.users = []
    })

  }
})


export default usersSlice.reducer