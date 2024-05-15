import Product from './types/Product'

export async function fetchProducts(): Promise<Product[]> {
	try {
		const res = await fetch('https://fakestoreapi.com/products')
		if (res.ok) {
			return await res.json()
		} else {
			// eslint-disable-next-line no-console
			console.error('error')
			return []
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('error fetching product: ', error)
		return []
	}
}
export async function deleteProduct(id: number): Promise<Product | undefined> {
	try {
		const res = await fetch(`https://dummyjson.com/products/${id}`, { method: 'DELETE' })
		if (res.ok) {
			return await res.json()
		} else {
			// eslint-disable-next-line no-console
			console.error('Failed to delete product:', res.statusText)
		}
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error('Error deleting product:', error)
		return undefined
	}
}

export async function fetchEditTitle(title: string, id: number): Promise<Product> {
	const res = await fetch(`https://dummyjson.com/products/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ title }),
	})
	return res.json()
}
