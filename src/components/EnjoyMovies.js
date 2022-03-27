import { movies } from '../datas/moviesList'
import MoviesItem from './MoviesItem'

function EnjoyMovies() {

	return (
		<div className='enjoy-movies'>

				{movies.map(({ id, cover,title,category}) => (
					<MoviesItem
						key={id}
						cover={cover}
						title={title}
            category={category}

					/>
				))}

		</div>
	)
}

export default EnjoyMovies
