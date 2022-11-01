import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftItem } from './GiftItem';

export const GifGrid = ({ category }) => {
	const { images, loading } = useFetchGifs(category);

	return (
		<div>
			<h3>{category}</h3>
			{loading && <h2>Cargando...</h2>}
			<div className="card-grid">
				{images.map((image) => (
					<GiftItem key={image.id} {...image} />
				))}
			</div>
		</div>
	)
};

GifGrid.propTypes = {
	category: PropTypes.string.required
};

