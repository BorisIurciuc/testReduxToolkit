import { RootState } from '../../app/store'
import RecipeOne from './types/RecipeOne'

export const selectRecipeOne = (state: RootState): RecipeOne => state.recipeOne.recipeOne
