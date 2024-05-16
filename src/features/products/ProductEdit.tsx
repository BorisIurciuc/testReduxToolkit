import { FormEvent, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { editTitle } from './ProductsSlice'

export default function ProductEdit(props: { idProd: number }): JSX.Element {
	const { idProd } = props
	const [title, setTitle] = useState<string>('')
	const dispatch = useAppDispatch()

	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault()
		dispatch(editTitle({ title, id: idProd }))
	}
	console.log('idProd', idProd)
	console.log('title ', title)
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="new title"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				{title}
				<button type="submit">ok</button>
			</form>
		</div>
	)
}
