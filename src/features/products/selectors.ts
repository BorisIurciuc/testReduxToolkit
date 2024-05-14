import Product from './types/Product'
import { RootState } from '../../app/store'

export const selectProducts = (state: RootState): Product[] => state.products.products
