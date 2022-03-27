import '../styles/MoviesItem.css'





function MoviesItem({ cover, title,category}) {
	return (
		<div className='mv-item' >
			<img className='mv-item-cover' src={cover} alt={`${title} cover`} />
		</div>
	)
}

export default MoviesItem
