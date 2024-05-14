import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from './api'
import { createAppSlice } from '../../app/createAppSlice'
import ProductState from './types/ProductState'

const initialState: ProductState = {
	products: [],
}

export const loadProducts = createAsyncThunk('products/loadProducts', () => api.getAll())

export const productsSlice = createAppSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(loadProducts.fulfilled, (state, action) => {
			state.products = action.payload
		})
	},
})
