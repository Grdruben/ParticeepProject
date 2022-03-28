import Like from '../assets/like.png'
import Dislike from '../assets/dislike.png'


function CareScale({ careType,scaleValue }) {

	return (
		<div>
       {
         scaleValue
       }
       {
         careType === 'likes'? <img src={Like} alt='like-icon'style={{width:20}}/>:
         <img src={Dislike} alt='dislike-icon' style={{width:30}}/>
       }

		</div>
	)
}

export default CareScale
