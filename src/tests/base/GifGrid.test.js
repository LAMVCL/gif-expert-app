import { GifGrid } from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs")

describe('Set de pruebas de GifGrid', () => {
    
    const category = 'One punch';

    test('prueba de snapshot en <GifGrid/> ', () => {
        

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs ', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Cualquier cosa'
        }];
        
        //Simulamos que los elementos han cargado pasandole las gifs a data y estableciendo loading en false
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);

        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    

});