import Product from './Product'

export default interface ProductsState {
	products: Product[]
	filtered: Product[]
	error?: string
}
