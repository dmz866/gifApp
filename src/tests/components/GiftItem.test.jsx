import { render } from "@testing-library/react";
import { GiftItem } from "../../components";

describe('Test GiftItem', () => {
	test('debe hacer match con el snapshot', () => {
		const { container } = render(<GiftItem titulo='tituloTest' url='urlTest' />);

		expect(container).toMatchSnapshot();
	});
});