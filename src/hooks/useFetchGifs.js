import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifs";

/**
 * Retornamos el stado de una funcion con los datos
 * @param {*} category 
 * @returns 
 */
export const useFetchGifs = (category) => {
    //Estado inicial
    const [state, setState] = useState(
        {
            data: [],
            loading: true
        }
    );

    /**
     * Evalia el efecto cuando la categoria cambia y se dispara
     */
    useEffect(()=>{
        //Promesa
        getGifts(category).then(
            //Retorno de los datos
            imgs =>{
                //Nuevo state
                setState({
                    data: imgs,
                    loading: false
                });
            }

        );
    },[category]);

    return state;
    
}
