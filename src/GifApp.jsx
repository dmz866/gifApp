import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { getGifs } from './helpers/gifHelper';

export const GifApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

	const addNewCategory = (newCategory) => {
		setCategories([...categories, newCategory]);
	};

	getGifs('dragon');

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