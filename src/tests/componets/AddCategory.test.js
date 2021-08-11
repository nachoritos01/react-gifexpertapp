import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import React from "react";
import { AddCategory } from "../../components/AddCategory";


describe('Puebas en <AddCategory/>', () => {

    const setCategories = jest.fn();
    //Sujeto de pruebas info, con u se actualiza el snapshot
    // Solo por la ayuda del autocompletador, no es necesario
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    //Siclo de vida de las pruebas
    beforeEach(()=>{
        //Limpiar la simulacion 
        jest.clearAllMocks();
        //Reseteamos el componente como esta antes
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    });

    
    test('Pruebas con de mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();
        
    });

    test('Dede de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';
        // Definimos el evento change
        input.simulate('change', { target: { value }});

        expect( wrapper.find('p').text().trim()).toBe(value);
        
    });

    test('No debe de postear la informacion con submit ', () => {
        // Mandamos la funcion prevent defaul que se esta esperando
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        // Esperamos que la funcion no era llamado
        expect( setCategories).not.toHaveBeenCalled()
    });

    test('Debe de llamar el set cateries y limpiar la caja de texto', () => {
        //1 simular el inputChange
        
        const value = 'hola mundo';
        wrapper.find('input').simulate('change', { target: { value }});

        //2 Simular el sumbnit
        wrapper.find('form').simulate('submit', { preventDefault(){}});
        //3 setCAtegories debe haber llamado

        expect(setCategories).toHaveBeenCalled();

        //Esperando que debe ser llamado con una funcion
        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function));

        //4 El valor del input debe de estar ''
        console.log(wrapper.find('input').prop('value'));
        expect(wrapper.find('input').prop('value')).toBe('');
        
    });
    
    
    
    
    
})
