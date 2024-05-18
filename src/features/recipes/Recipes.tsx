import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectRecipes } from './selectors'
import { loadRecipes } from './RecipesSlice'
import { Link } from 'react-router-dom'

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
						<h3>{recipe.name}</h3>
						{recipe.instructions.map((instruction, index) => (
							<li key={index}>{instruction}</li>
						))}
						<img src={recipe.image} style={{ width: '200px' }} alt="image" />
						{recipe.mealType.map((myleTp, index) => (
							<li key={index}>
								<h4>{myleTp}</h4>
							</li>
						))}
						<Link to={`${recipe.id}`}></Link>
					</li>
				))}
			</ul>
		</div>
	)
}
// <Link to={`${wineData.id}`}>Подробнее</Link>