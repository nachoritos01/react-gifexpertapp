import React from 'react'

export const GiftGridItem = ({title, url}) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img alt={title} src={url}/>
            <p>{title}</p>
        </div>
    )
}
