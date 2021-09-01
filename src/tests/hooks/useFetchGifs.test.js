import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";

describe('Pruebsa en el hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial. ', async() => {
        
        /* const {result} = renderHook(() => {
            return useFetchGifs('Tokyo Revengers');
        }); */

        //Forma corta
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Tokyo Revengers'));

        const {data, loading} = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe de retornar un arreglo de imgs y el loading en false ', async() => {
       
        //waitForNextUpdate nos indicará cuando cambie nuestro custom hook
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Tokyo Revengers'));
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(12);
        expect(loading).toBe(false);
    });
    
    
});
