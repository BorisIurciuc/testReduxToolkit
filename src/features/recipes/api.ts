import Recipes from './types/Recipe'

export async function fetchRecipes(): Promise<Recipes[]> {
	try {
		const res = await fetch('https://dummyjson.com/recipes')
		if (res.ok) {
			return await res.json()
		} else {
			throw new Error('Failed to fetch recipes')
		}
	} catch {
		throw new Error('Failed to fetch recipes')
	}
}
