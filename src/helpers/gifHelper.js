export const getGifs = async (category) => {
	const url = `http://api.giphy.com/v1/gifs/search?api_key=nfK7EYmszMrz9O3bEDZ4fycUNUUzkmkO&q=${category}&limit=5`;
	const resp = await fetch(url);
	const { data = [] } = await resp.json();

	return data.map(img => ({ id: img.id, titulo: img.title, url: img.images.downsized_medium.url }));
};