import PropTypes from 'prop-types';

export const GiftItem = ({ titulo, url }) => {
	return (
		<div className="card">
			<img src={url} alt={titulo} />
			<p>{titulo}</p>
		</div>
	)
};

GiftItem.propTypes = {
	titulo: PropTypes.string.required,
	url: PropTypes.string.required
};