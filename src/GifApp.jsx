import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {
	const [categories, setCategories] = useState([]);

	const addNewCategory = (newCategory) => {
		setCategories([...categories, newCategory]);
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