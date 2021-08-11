import {React} from "react";
import { shallow } from "enzyme";
import { GiftGridItem } from "../../components/GiftGridItem";

describe('Pruebas en <GiftGridItem />', () => {

    //Valores para validar
    const title = 'Un titulo';
    const url = 'https://via.placeholder.com/350x150';

    //Sujeto de pruebas
    const wrapper =shallow(<GiftGridItem title={title} url={url}/>);
    /**
     * Hacer match con el snapshot
     */
    test('Debe de mostratr el componente correctamente ', () => {
        //Esperar que wrapper sea exactamente lo que se esperaba
        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title); 
        
    });

    test('Debe de tener la imagen igual al url y el alt ade los props ', () => {

        const img = wrapper.find('img');
        expect( img.prop('src')).toBe(url);
        expect( img.prop('alt')).toBe(title);
        
    });

    test('Debe de tener animate_fadeIn ', () => {
        const div = wrapper.find('div');

        const className = div.prop('className');
        
        const existe = className.search("animate_fadeIn")
        console.log(existe);

        //animate_fadeIn
        expect(existe).toBe(-1);
    });    
    
})
