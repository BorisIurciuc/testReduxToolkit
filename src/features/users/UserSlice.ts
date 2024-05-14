import UserState from './types/UserState'
import * as api from './api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: UserState = {
	users: [],
}

export const loadUsers = createAsyncThunk('users/loadUsers', async () => {
	return api.fetchUsers()
})
export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(loadUsers.fulfilled, (state, action) => {
			state.users = action.payload
		})
	},
})
export default usersSlice.reducer
