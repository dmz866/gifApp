import { getGifs } from "../../helpers/gifHelper";

describe('Test gifHelper', () => {
	test('debe retornar un array de gifs', async () => {
		const result = await getGifs('test');

		expect(result.length).toBeGreaterThan(0);
		expect(result[0]).toEqual({
			id: expect.any(String),
			titulo: expect.any(String),
			url: expect.any(String),
		});
	});
});