import { RootState } from '../../app/store'
import Product from './types/Product'

export const selectProducts = (state: RootState): Product[] => state.products.products
export const selectError = (state: RootState): string | undefined => state.products.error
export const selectEdit = (state: RootState): Product[] => state.products.filtered
