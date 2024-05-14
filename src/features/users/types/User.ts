export default interface User {
	address: {
		city: string
		street: string
		number: number
		zipcode: string
	}
	id: number
	email: string
	username: string
	name: {
		firstname: string
		lastname: string
	}
}
