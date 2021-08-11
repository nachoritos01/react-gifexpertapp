import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';

import { renderHook } from '@testing-library/react-hooks';
describe('Pruebas en el hook', () => {
    test('Debe de retornar el estado inicial ', async () => {

        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs('One puch') );
        //uconsole.log(result);

        const { data, loading } = result.current;
        //console.log(result.current);

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    });


    test('Debe de retornar un arreglo de ums y el loading en false ', async () => {
        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs('One puch') );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    })
    
    
    
})
