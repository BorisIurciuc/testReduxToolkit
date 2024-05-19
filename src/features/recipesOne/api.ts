import RecipeOne from './types/RecipeOne'

export async function fetchRecipeOne(id: number): Promise<RecipeOne> {
	try {
		const res = await fetch(`https://dummyjson.com/recipes/${id}`)
		if (res.ok) {
			return await res.json()
		} else {
			throw new Error('Failed to fetch recipe')
		}
	} catch {
		throw new Error('Failed to fetch recipe')
	}
}
