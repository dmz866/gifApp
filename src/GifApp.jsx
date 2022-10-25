import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {
	const [categories, setCategories] = useState([]);

	const addNewCategory = (newCategory) => {
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>Gif Expert App</h1>
			<AddCategory addCategory={addNewCategory} />
			<ol>
				{categories.map(c => <GifGrid key={c} category={c} />)}
			</ol>
		</>
	);
};