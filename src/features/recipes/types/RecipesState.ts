import Recipe from './Recipe'

export default interface RecipesState {
	recipes: Recipe[]
	filtered: Recipe[]
	error?: string
}
