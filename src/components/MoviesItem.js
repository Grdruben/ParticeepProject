import '../styles/MoviesItem.css'
import CareScale from './CareScale'




function MoviesItem({ cover, title,likes,dislikes}) {
	return (
		<li className='mv-item' >
			<img className='mv-item-cover' src={cover} alt={`${title} cover`} />
      <br/>
      <div>
      <span className='mv-item-title'>{title}</span>
      <br/>
      <CareScale careType='likes'  scaleValue ={likes} />
      <CareScale careType='dislikes' scaleValue={dislikes}/>

      </div>
		</li>
	)
}

export default MoviesItem
