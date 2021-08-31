import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Set de pruebas de AddCategory', () => {

    const setCategories = jest.fn();
    //se inicializa para el intellisense
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    
    beforeEach(() =>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
    
    test('prueba de snapshot en <AddCategory/> ', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto ', () => {
        
        const input = wrapper.find('input');

        //Le mandamos  el evento
        const value = 'Valor de evento';
        input.simulate('change',{
            target: {
                value: value
            }
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('NO debe de postear la información con submit', () => {

        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    
    test('  ', () => {
        
    });
    
});
