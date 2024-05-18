// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom'

export default function Navbar(): JSX.Element {
	return (
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="counter">Counter</NavLink>
			<NavLink to="quotes">Quotes</NavLink>
			<NavLink to="products">Products</NavLink>
			<NavLink to="users">Users</NavLink>
			<NavLink to="recipes">Recipes</NavLink>
		</nav>
	)
}
