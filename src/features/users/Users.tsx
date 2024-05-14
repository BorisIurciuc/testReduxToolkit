import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectUsers } from './selectors'
import { loadUsers } from './UserSlice'
import style from './Users.module.css'
import Carts from '../../components/cartUsers/Carts'

export default function Users(): JSX.Element {
	const users = useAppSelector(selectUsers)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(loadUsers())
	}, [dispatch])

	return (
		<div>
			<h1>Users BR3</h1>
			<ul className={style.containerUsers}>
				{users.map(user => (
					<li key={user.id}>
						<b>firstname {user.name.firstname} </b>
						<br />
						<b> lastname{user.name.lastname}</b>
						<br />
						username: {user.username} email: {user.email}
						<br />
						adress: {user.address.city}, {user.address.street}, {user.address.number},
						{user.address.zipcode}
						<Carts userId={user.id} />
					</li>
				))}
			</ul>
		</div>
	)
}
