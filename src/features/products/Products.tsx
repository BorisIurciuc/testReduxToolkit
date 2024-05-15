import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectProducts } from './selectors'
import { deleteProduct, loadProducts } from './ProductsSlice'
import ProductEdit from './ProductEdit'

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
						<p>
							<b>{product.title}</b>
						</p>
						<ProductEdit id={product.id} />
						<p>{product.description}</p>
						<p>{product.price}</p>
						<img src={product.thumbnail} alt="thumbnail" />
						<button type="button" onClick={() => dispatch(deleteProduct(product.id))}>
							delete
						</button>
						<br />
						<br />
					</li>
				))}
			</div>
		</div>
	)
}
