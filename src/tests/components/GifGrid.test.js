import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Test GifGrid', () => {
	const category = 'One Punch';

	test('debe mostrar el loading inicialmente', () => {
		const images = [
			{
				id: 'ABC',
				title: 'Saitama',
				url: 'saitama.jpg'
			},
			{
				id: 'ZXC',
				title: 'Goku',
				url: 'goku.jpg'
			}
		];

		useFetchGifs.mockReturnValue({ images, loading: true });
		render(<GifGrid category={category} />);

		expect(screen.getByText('Cargando...'));
		expect(screen.getByText(category));
		expect(screen.getAllByRole('img').length).toBe(2);
	});
});