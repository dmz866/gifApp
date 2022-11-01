import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components";

describe('Test AddCategory', () => {

	test('debe cambiar el valor de la caja de texto', () => {
		render(<AddCategory addCategory={() => { }} />);
		const input = screen.getByRole('textbox');

		fireEvent.input(input, { target: { value: 'ValueTest' } });

		expect(input.value).toBe('ValueTest');
	});

	test('debe llamar a addCategory si el input tiene un valor', () => {
		const inputValue = 'valueTest';
		const addCategory = jest.fn();

		render(<AddCategory addCategory={addCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBe('');
		expect(addCategory).toBeCalled();
		expect(addCategory).toBeCalledTimes(1);
		expect(addCategory).toBeCalledWith(inputValue);
	});

	test('no debe llamar a addCategory si el input esta vacio', () => {
		const addCategory = jest.fn();

		render(<AddCategory addCategory={addCategory} />);

		const form = screen.getByRole('form');
		fireEvent.submit(form);

		expect(addCategory).not.toBeCalled();
	});
});