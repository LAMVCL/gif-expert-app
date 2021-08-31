import React from "react";
import { shallow } from "enzyme";
import {GifGridItem} from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem/>', () =>{

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg'

    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Debe mostrar el <GifGridItem/> correctamente', () =>{

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el title', () =>{

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Debe de tener la imagen igual al url y alt de los props', () =>{

        const img = wrapper.find('img');

        //Obtenemos props del atributo img.
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe de tener animate__fadeInDown ', () => {
        
        const div = wrapper.find('div');
        const clase = div.prop('className');

        expect(clase.includes('animate__fadeInDown')).toBe(true);
    })
    
});