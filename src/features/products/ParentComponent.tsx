import { useState } from 'react'
import ProductEdit from './ProductEdit'
import Products from './Products'


const ParentComponent: React.FC = () => {
	const [product, setProduct] = useState({ title: 'Initial Title' })

	const updateProductTitle = (newTitle: string): void => {
		setProduct(prevProduct => ({ ...prevProduct, title: newTitle }))
	}

	return (
		<div>
			<ProductEdit title={product.title} setTitle={updateProductTitle} />
			<Products product={product} />
		</div>
	)
}

export default ParentComponent
