import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectRecipeOne } from './selectors'
import { loadRecipeOne } from './RecipeOneSlice'

interface RecipeOneProps {
	id: number
	goBack: () => void
}

export default function RecipesOne({ id, goBack }: RecipeOneProps): JSX.Element {
	const recipeOne = useAppSelector(selectRecipeOne)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadRecipeOne(id))
	}, [dispatch, id])

	return (
		<div>
			<button onClick={goBack}>Back to Recipes</button>
			<h1>{recipeOne.name}</h1>
			<ul>
				<h3>instructions</h3>
				{recipeOne.instructions.map((instruction, index) => (
					<li key={index}>{instruction}</li>
				))}
			</ul>
			<img src={recipeOne.image} alt={recipeOne.name} style={{ width: '600px' }} />
			<ul>
				{recipeOne.mealType.map((mealType, index) => (
					<li key={index}>{mealType}</li>
				))}
			</ul>
		</div>
	)
}
