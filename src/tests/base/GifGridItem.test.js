import React from "react";
import { shallow } from "enzyme";
import {GifGridItem} from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem/>', () =>{

    let wrapper = shallow(<GifGridItem/>);

    test('Debe mostrar el <GifGridItem/> correctamente', () =>{

        expect(wrapper).toMatchSnapshot();
    })
});