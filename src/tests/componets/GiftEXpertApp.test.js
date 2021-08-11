import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GiftEXpertApp } from '../../GiftEXpertApp';


describe('Probando el componente <GiftEXpertApp/>', () => {

    
    test('Deberia de mostrarse el componente correctamente ', () => {
        const wrapper = shallow(<GiftEXpertApp/>);
        
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Deberia de mostrar una lista de categorias ', () => {
        const categories = [ 'One puch men', 'Dragon ball' ];
        const wrapper = shallow(<GiftEXpertApp defaultCategories={categories}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GiftGrid').length).toBe(categories.length);
    });
    
    
})

