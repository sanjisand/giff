import GifGrid from './Components/GifGrid'
import AddCategoria from './Components/AddCategoria'
//
import React, {useState} from 'react'

const App = () => {

	//state
	const [categorias, setCategorias] = useState(['One punch'])

	//funciones

	return (
		<>
			<h2>Giff</h2>
			<AddCategoria setCategorias = {setCategorias}/>	
			<hr/>
			<ol>
				{
					categorias.map((item) => (
						<GifGrid 
							categoria={item} 
							key={item}
						/>
					))
				}
			</ol>
		</>
	)
}

export default App
