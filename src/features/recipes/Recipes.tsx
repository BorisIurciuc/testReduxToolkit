import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectRecipes } from './selectors'
import { loadRecipes } from './RecipesSlice'

export default function Recipes(): JSX.Element {
	const recipes = useAppSelector(selectRecipes)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadRecipes())
	}, [dispatch])

	return (
		<div>
			<h2>Recipes</h2>
			<ul>
				{recipes.map(recipe => (
					<li key={recipe.id}>
						<p>{recipe.name}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
