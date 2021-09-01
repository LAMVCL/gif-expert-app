import { shallow } from "enzyme";
import { GifExpertApp } from "../../GifExpertApp";

describe('Set de pruebas para GifExpertApp', () => {
    
    test('prueba de snapshot en <GifExpertApp/> ', () => {
        
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorias ', () => {
        
        const categories = ['One punch','Tokyo Revengers'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    


});
