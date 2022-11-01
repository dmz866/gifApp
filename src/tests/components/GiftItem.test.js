import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../components";

describe('Test GiftItem', () => {
	const url = 'urlTest';
	const titulo = 'tituloTest';

	test('debe hacer match con el snapshot', () => {
		const { container } = render(<GiftItem titulo={titulo} url={url} />);

		expect(container).toMatchSnapshot();
	});

	test('debe mostrar la imagen con el URL y ALT indicado', () => {
		render(<GiftItem titulo={titulo} url={url} />);
		const { src, alt } = screen.getByRole('img');

		expect(src).toContain(url);
		expect(alt).toBe(titulo);
	});

	test('debe mostrar el titulo en el componente', () => {
		render(<GiftItem titulo={titulo} url={url} />);
		const result = screen.getByText(titulo);

		expect(result).toBeTruthy();
	});
});