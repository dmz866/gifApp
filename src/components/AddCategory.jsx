import PropTypes from 'prop-types';
import { useState } from "react";

export const AddCategory = ({ addCategory }) => {
	const [inputValue, setInputValue] = useState('');
	const onInputChange = (e) => setInputValue(e.target.value);
	const onSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim()) {
			addCategory(inputValue);
		}

		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit} aria-label='form'>
			<input type='text' placeholder='Buscar gifs' value={inputValue} onChange={onInputChange} />
		</form>
	)
};

AddCategory.propTypes = {
	addCategory: PropTypes.func.required
};
