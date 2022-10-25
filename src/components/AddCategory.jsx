import { useState } from "react";

export const AddCategory = ({ addCategory }) => {
	const [inputValue, setInputValue] = useState('');
	const onInputChange = (e) => setInputValue(e.target.value);
	const onSubmit = (e) => e.preventDefault();
	const onAddCategory = (e) => {
		if (inputValue.trim()) {
			addCategory(inputValue);
		}

		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input type='text' placeholder='Buscar gifs' value={inputValue} onChange={onInputChange} />
			<button onClick={onAddCategory}>+</button>
		</form>
	)
};
