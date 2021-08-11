import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({category}) => {

    //Desustructuracion de los datos de retorno, y renombramos el valos de data
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            { loading && <p className="animate__animated animate__fadeIn">Loading</p>}
            <div className="card-grid">
                {/* Mandamos los valores al componente individualmente cap 75 */}
                { images.map((img)=>( <GiftGridItem key={img.id} {... img}/>))}
            </div>
        </>
    )
};

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}