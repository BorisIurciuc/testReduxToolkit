import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectProducts } from './selectors'
import { loadProducts } from './ProductsSlice'
import style from './Products.module.css'

export default function Products(): JSX.Element {
	const products = useAppSelector(selectProducts)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadProducts())
	}, [dispatch])

	return (
		<div>
			<h1>Products</h1>
			<ul className={style.containerProduct}>
				{products.map(product => (
					<li key={product.id}>
						<b>{product.title}</b>
						<br />
						{product.category}
						{product.description}
						<img src={product.image} alt="" />
						{product.price}
					</li>
				))}
			</ul>
		</div>
	)
}
