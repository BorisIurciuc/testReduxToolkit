import Product from './types/Product'

export async function fetchProducts(): Promise<Product[]> {
	const res = await fetch('https://dummyjson.com/products')
	return res.json()
}
export async function deleteProduct(id: number): Promise<Product> {
	const res = await fetch(`https://dummyjson.com/products/${id} `, { method: 'DELETE' })
	return res.json()
}
