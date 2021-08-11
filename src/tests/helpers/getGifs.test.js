import { getGifts } from "../../helpers/getGifs"

describe('Validando getGifs', () => {

    test('Validando la funcion getGifts()', async () => {

        const images = await getGifts('One puch');

        expect(images.length).toBe(10);
        
    });


    test('Debe de traer vacio ', async () => {
        const images = await getGifts('');

        expect(images.length).toBe(0);
    });
    

    
    
})
