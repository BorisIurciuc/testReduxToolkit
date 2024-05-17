interface ProductEditProps {
	title: string
	setTitle: (newTitle: string) => void
}

const ProductEdit: React.FC<ProductEditProps> = ({ title, setTitle }) => {
	return (
		<div>
			<input
				type="text"
				placeholder="new title"
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
		</div>
	)
}

export default ProductEdit
