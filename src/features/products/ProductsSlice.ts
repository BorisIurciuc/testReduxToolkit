import ProductsState from './types/ProductsState'
import * as api from './api'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState: ProductsState = {
	products: [],
	filtered: [],
}
export const loadProducts = createAsyncThunk('products/loadProducts', async () => {
	const response = await api.fetchProducts()
	return response
})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id: number) => {
	await api.deleteProduct(id)
	return id
})

export const editTitle = createAsyncThunk(
	'product/editTitle',
	async ({ title, id }: { title: string; id: number }) => {
		const response = await api.fetchEditTitle(title, id)
		return response
	}
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
				const id = action.payload
				state.products = state.products.filter(product => product.id !== id)
				//state.filtered = state.filtered.filter(product => product.id !== id)
			})
			.addCase(editTitle.fulfilled, (state, action) => {
				const updatedProduct = action.payload
				state.products = state.products.map(product =>
					product.id === updatedProduct.id ? updatedProduct : product
				)
				// state.filtered = state.filtered.map(product =>
				// 	product.id === updatedProduct.id ? updatedProduct : product
				// )
			})
	},
})

export default productsSlice.reducer
