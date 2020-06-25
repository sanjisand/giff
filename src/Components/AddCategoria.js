import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategoria = ({setCategorias}) => {

	//estado
	const [inputValue, setInputValue] = useState('')

	//funciones
	const handleInputChange = e => {
		setInputValue(e.target.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
		if(inputValue.trim().length > 0){
			setCategorias( cats => [inputValue, ...cats])
			setInputValue('')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				type="text"
				value={inputValue}
				onChange={e => handleInputChange(e)}
			/>	
		</form>
	)
}

AddCategoria.propTypes = {
	setCategorias: PropTypes.func.isRequired
}

export default AddCategoria
