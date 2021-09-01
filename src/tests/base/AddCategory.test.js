import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Set de pruebas de AddCategory', () => {

    const setCategories = jest.fn();
    //se inicializa para el intellisense
    let wrapper;
    
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
    
    
    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {

        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
        //1.-simular el imputChange
        //Obtenemos la caja de texto.
        const input = wrapper.find('input');
        //Le mandamos  el evento
        const value = 'Hola mundo';
        input.simulate('change',{
            target: {
                value: value
            }
        });

        //2.- Simular el submit
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        
        //3.- setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        //4.- Debe pasar una funcion
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        //5.- el valor del input debe estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
});
