import { useEffect, useState } from 'react'
import Cart from './types/Cart'

export default function Carts(props: { userId: number }): JSX.Element {
	const { userId } = props
	const [carts, setCarts] = useState<Cart[]>([])
	async function fetchCart(): Promise<void> {
		try {
			const res = await fetch(`https://fakestoreapi.com/carts/${userId}`)
			if (!res.ok) {
				throw new Error('Failed to fetch carts')
			}
			const data: Cart = await res.json()
			//console.log(data)
			setCarts([data])
		} catch (error) {
			//console.error('Error fetching carts:', error)
		}
	}
	useEffect(() => {
		fetchCart()
	}, [userId])

	return (
		<div>
			{carts.map(cart => (
				<div key={cart.id}>
					<ul>
						{cart.products.map(product => (
							<li key={`${cart.id}-${product.productId}`}>
								Product ID: {product.productId}, Quantity: {product.quantity}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}
