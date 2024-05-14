export default interface Cart {
	id: number
	userId: number
	date: string
	products: ProductInOrder[]
}

interface ProductInOrder {
	productId: number
	quantity: number
}
