import Recipes from './types/Recipe'

export async function fetchRecipes(): Promise<Recipes[]> {
	try {
		const res = await fetch('https://dummyjson.com/recipes')
		if (res.ok) {
			const data = (await res.json()) as { recipes: Recipes[] }
			return data.recipes
		} else {
			throw new Error('Failed to fetch recipes')
		}
	} catch {
		throw new Error('Failed to fetch recipes')
	}
}
