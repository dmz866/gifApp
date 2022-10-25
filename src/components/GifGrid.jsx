import { useEffect, useState } from "react";
import { getGifs } from '../helpers/gifHelper';

export const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);
	const getImages = async () => {
		if (!category) return;

		const images = await getGifs(category);
		setImages(images);
	};

	useEffect(() => {
		getImages();
	}, []);

	return (
		<div>
			<h3>{category}</h3>
			<ol>
				{images.map(({ id, titulo }) => (
					<li key={id}>{titulo}</li>
				))}
			</ol>
		</div>
	)
};
