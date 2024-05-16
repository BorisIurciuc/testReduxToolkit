import ProductsState from './types/ProductsState'
import * as api from './api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: ProductsState = {
	products: [],
	filtered: [],
}
console.log('initialState ', initialState)

export const loadProducts = createAsyncThunk('products/loadProducts', () => api.fetchProducts())
export const deleteProduct = createAsyncThunk('products/deleteProduct', (id: number) =>
	api.deleteProduct(id)
)
export const editTitle = createAsyncThunk(
	'product/editTitle',
	({ title, id }: { title: string; id: number }) => api.fetchEditTitle(title, id)
)
console.log('editTitle', editTitle)

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
			.addCase(editTitle.fulfilled, (state, action) => {
				state.filtered = state.filtered.map(product =>
					product.id === action.payload.id ? action.payload : product
				)
			})
	},
})
export default productsSlice.reducer
