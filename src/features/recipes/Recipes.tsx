import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectRecipes } from './selectors'
import { loadRecipes } from './RecipesSlice'
import RecipesOne from '../recipesOne/RecipesOne'
import style from './Recipes.module.css'

export default function Recipes(): JSX.Element {
	const recipes = useAppSelector(selectRecipes)
	const dispatch = useAppDispatch()
	const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null)

	useEffect(() => {
		dispatch(loadRecipes())
	}, [dispatch])

	const handleSelectRecipe = (id: number): void => setSelectedRecipe(id)

	return (
		<div className={style.divRecipes}>
			{selectedRecipe === null ? (
				<div>
					<h2>Recipes</h2>
					<ul className={style.ulRecipes}>
						{recipes.map(recipe => (
							<li key={recipe.id} className={style.liRecipes}>
								<h3>{recipe.name}</h3>
								<img src={recipe.image} style={{ width: '200px' }} alt={recipe.name} />
								<ul>
									{recipe.mealType.map((mealType, index) => (
										<li key={index}>{mealType}</li>
									))}
								</ul>
								<button onClick={() => handleSelectRecipe(recipe.id)}>View Details</button>
							</li>
						))}
					</ul>
				</div>
			) : (
				<RecipesOne id={selectedRecipe} goBack={() => setSelectedRecipe(null)} />
			)}
		</div>
	)
}
