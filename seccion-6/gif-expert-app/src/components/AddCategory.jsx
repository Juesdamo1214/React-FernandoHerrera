import { useState } from "react";
export const AddCategory = ({onNewCategory}) => {

	const [inputValue, setInputValue] = useState("")

	const onInputChange = ({target}) => {
		setInputValue(target.value)
	}

	const onSubmit = (event) => {

		const valueInput = inputValue.trim()

		event.preventDefault()
		if (valueInput.length <= 1) return;

		// setCategories(categories => [inputValue, ...categories])
		onNewCategory(valueInput)
		setInputValue('')
	}

	return (
		<form onSubmit={onSubmit}>
			<input
			type="text"
			placeholder="Buscar gifs"
			value={ inputValue }
			onChange={ onInputChange }
			/>
		</form>
	)
}
