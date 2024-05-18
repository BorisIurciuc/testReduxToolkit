import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectRecipeOne } from './selectors'
import RecipeOne from './types/RecipeOne'
import { loadRecipeOne } from './RecipeOneSlice'

export default function RecipesOne(props: { id: number }): JSX.Element {
	const { id } = props
	const recipeOne = useAppSelector(selectRecipeOne)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadRecipeOne(id))
	}, [dispatch, id])

	return (
		<div>
			<h2>Recipe</h2>
			{recipeOne.id}
			{recipeOne.name}
		</div>
	)
}
