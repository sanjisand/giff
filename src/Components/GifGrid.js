import GifGridItem from './GifGridItem'
//
import React from 'react'
import {useFetchingGif} from '../hooks/useFetchingGif'

const GifGrid = ({categoria}) => {

	//state
	

	const {data,loading} = useFetchingGif(categoria)

	return (
		<>
			<h3>{categoria}</h3>
			{loading ? <p>Loading...</p> : null}
			<div className='card-grid'>
				{
					data.map( item => (
						<GifGridItem 
							key={item.id} 
							{...item}
						/>
					))
				}
			</div>
		</>
	)
}

export default GifGrid
