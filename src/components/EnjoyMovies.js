import { movies } from '../datas/moviesList'
import MoviesItem from './MoviesItem'
import Categories from './Categories'

function EnjoyMovies() {

  const categories = movies.reduce(
  		(acc, elem) =>
  			acc.includes(elem.category) ? acc : acc.concat(elem.category),
  		[]
  	)
	return (


		<div className='enjoy-movies'>
    <Categories
				categories={categories}
			/>
     <ul className='movies-list'>
				{movies.map(({ id, cover,title,likes,dislikes}) => (
					<MoviesItem
						key={id}
						cover={cover}
						title={title}
            likes={likes}
            dislikes={dislikes}
					/>
				))}
     </ul>
		</div>
	)
}

export default EnjoyMovies
