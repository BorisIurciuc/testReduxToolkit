import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from './api'
import RecipesState from './types/RecipesState'

const initialState: RecipesState = {
	recipes: [],
	filtered: [],
}

export const fetchReecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
	const response = await api.fetchRecipes()
	return response
})

export const recipesSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchReecipes.fulfilled, (state, action) => {
			state.recipes = action.payload
		})
	},
})
export default recipesSlice.reducer
