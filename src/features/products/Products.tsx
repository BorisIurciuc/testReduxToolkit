import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectProducts } from './selectors'
import { deleteProduct, loadProducts } from './ProductsSlice'

export default function Products(): JSX.Element {
	const products = useAppSelector(selectProducts)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadProducts())
	}, [dispatch])

	return (
		<div>
			<h1>Products</h1>
			<div>
				{products.map(product => (
					<li key={product.id}>
						<p>{product.title}</p>
						<p>{product.description}</p>
						<p>{product.price}</p>
						<img src={product.thumbnail} alt="thumbnail" />
						<button type="button" onClick={() => dispatch(deleteProduct(product.id))}>
							delete
						</button>
					</li>
				))}
			</div>
		</div>
	)
}
