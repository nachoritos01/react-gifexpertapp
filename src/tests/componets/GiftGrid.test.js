import { shallow } from 'enzyme';
import React from 'react'
import { GiftGrid } from '../../components/GiftGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';

//Fingir cualquier llamada y suponer o controlar la informacion que va a responder
jest.mock('../../hooks/useFetchGifs');
/**
 * Pruebas del componente gifGrid mock customhook
 */
describe('Pruebas en <GiftGrid/>', ()=>{
    const category = 'Hola mundo';
    // Validamos el estado inicial
    useFetchGifs.mockReturnValue({
        data: [],
        loading: true
    });

    let wrapper = shallow(<GiftGrid category={category}/>);

    test('Debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        
    });


    test('Dede de mostrar items cuando se cargan imagenes useFetchGifs ', () => {

        const data = [{
            id: '1',
            title: 'test.gif',
            url: 'gift.gif'
        }];
        useFetchGifs.mockReturnValue({
            data,
            loading: false
        });

        const wrapper =  shallow(<GiftGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GiftGridItem').length).toBe(data.length);

        
    });
    
    
});

