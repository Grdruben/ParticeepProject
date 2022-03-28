import '../styles/Categories.css'

function Categories({categories}) {
	return (
		<ul className='mv-categories'>
        {<span className='mv-categories-title'>Categories de films</span>}
				{categories.map((cat,index) => (
            <li key={`${cat}-${index}`}>{cat }</li>
				))}


		</ul>
	)
}

export default Categories
