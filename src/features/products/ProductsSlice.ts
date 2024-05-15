import ProductsState from './types/ProductsState'
import * as api from './api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: ProductsState = {
	products: [],
}

export const loadProducts = createAsyncThunk('products/loadProducts', () => api.fetchProducts())
export const deleteProduct = createAsyncThunk('products/deleteProduct', (id: number) =>
	api.deleteProduct(id)
)
export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loadProducts.fulfilled, (state, action) => {
				state.products = action.payload
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.products = state.products.filter(product => product.id !== action.payload?.id)
			})
	},
})
export default productsSlice.reducer
