// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Counter } from './features/counter/Counter'
import { Quotes } from './features/quotes/Quotes'
import Layout from './layouts/Layout'
import Home from './components/Home/Home'
import Products from './features/products/Products'
import Users from './features/users/Users'

function App(): JSX.Element {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="counter" element={<Counter />} />
					<Route path="quotes" element={<Quotes />} />
					<Route path="products" element={<Products />} />
					<Route path="users" element={<Users />} />
				</Route>
			</Routes>
		</>
	)
}
export default App
