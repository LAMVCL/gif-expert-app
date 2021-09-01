import { shallow } from "enzyme";
import { GifExpertApp } from "../../GifExpertApp";

describe('Set de pruebas para GifExpertApp', () => {
    
    test('prueba de snapshot en <GifExpertApp/> ', () => {
        
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();

    });
})
