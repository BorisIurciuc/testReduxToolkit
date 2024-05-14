import { RootState } from '../../app/store'
import User from './types/User'

export const selectUsers = (state: RootState): User[] => state.users.users
