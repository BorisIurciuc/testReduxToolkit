import { RootState } from '../../app/store'
import Recipe from './types/Recipe'

export const selectRecipes = (state: RootState): Recipe[] => state.recipes.recipes
