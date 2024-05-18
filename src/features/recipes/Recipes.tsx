import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchRecipes } from './api'
import { selectRecipes } from './selectors'

export default function Recipes(): JSX.Element {
	const recipes = useAppSelector(selectRecipes)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchRecipes)
	}, [dispatch])

	return (
		<div>
			<h2>Recipes</h2>
			<div>
				{recipes.map(recipe => (
					<li key={recipe.id}>
						{recipe.name}
						{recipe.ingredients}
						{recipe.instructions}
					</li>
				))}
			</div>
		</div>
	)
}
