// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Counter } from './features/counter/Counter'
import { Quotes } from './features/quotes/Quotes'
import Layout from './layouts/Layout'
import Home from './components/Home/Home'
import Users from './features/users/Users'
import Products from './features/products/Products'
import Recipes from './features/recipes/Recipes'

function App(): JSX.Element {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="counter" element={<Counter />} />
					<Route path="quotes" element={<Quotes />} />
					<Route path="users" element={<Users />} />
					<Route path="products" element={<Products />} />
					<Route path="recipes" element={<Recipes />} />
				</Route>
			</Routes>
		</>
	)
}
export default App
