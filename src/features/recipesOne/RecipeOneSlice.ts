import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import RecipeOneState from './types/RecipeOneState'
import * as api from './api'

const initialState: RecipeOneState = {
	recipeOne: {
		id: 0,
		name: '',
		instructions: [],
		image: '',
		mealType: [],
	},
}

export const loadRecipeOne = createAsyncThunk('recipeOne/loadRecioeOne', async (id: number) => {
	const respons = await api.fetchRecipeOne(id)
	return respons
})

export const RecipeOneSlice = createSlice({
	name: 'recipeOne',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(loadRecipeOne.fulfilled, (state, action) => {
			state.recipeOne = { ...action.payload }
		})
	},
})
