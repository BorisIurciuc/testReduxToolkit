// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'

export default function Navbar(): JSX.Element {
	return (
		<nav className={style.navigation}>
			<ul className={style.navList}>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="counter">Counter</NavLink>
				</li>
				<li>
					<NavLink to="quotes">Quotes</NavLink>
				</li>
				<li>
					<NavLink to="products">Products</NavLink>
				</li>
				<li>
					<NavLink to="users">Users</NavLink>
				</li>
				<li>
					<NavLink to="recipes">Recipes</NavLink>
				</li>
			</ul>
		</nav>
	)
}
