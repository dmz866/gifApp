import { renderHook } from '@testing-library/react';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('probar useFetchGifs', () => {
	test('debe retornar el estado inicial', () => {
		renderHook(() => { useFetchGifs('One Punch') });

	});
})
