import style from './Home.module.css'

export default function Home(): JSX.Element {
	return (
		<div className={style.containerHome}>
			<h1>Home</h1>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. In inventore amet minus nobis
				<br />
				ipsam expedita reprehenderit repellat voluptatibus minima, quaerat facere voluptates! Soluta
				<br />
				laboriosam iste corrupti alias explicabo ut atque.
			</p>
			<img
				src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2017_04/1876141/170123-pluto-new-horizons-mn-1400.jpg"
				alt=""
			/>
		</div>
	)
}
