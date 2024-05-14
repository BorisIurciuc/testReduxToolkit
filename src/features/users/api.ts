import User from './types/User'

export async function fetchUsers(): Promise<User[]> {
	const res = await fetch('https://fakestoreapi.com/users')
	if (!res.ok) {
		throw new Error('Failed to fetch users')
	}
	return res.json()
}
