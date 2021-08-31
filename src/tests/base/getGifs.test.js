import {getGifs} from '../../helpers/getGifs'
describe('Set de pruebas en getGifs Fetch', () => {
     
    test('debe de traer 10 elementos ', async() => {
        
        const gifs = await getGifs('Hunter x Hunter');

        expect(gifs.length).toBe(12);
    });
   
    test('debe de traer 0 elementos ', async() => {
        
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
    })

});
