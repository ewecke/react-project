import React from 'react'

export default function Card({name, color, country, img_url}) {
    
    return (
        <div className="productCard">
            <img src={img_url} alt="bier sort"/>
            <h3>{name}</h3>
            <p>{color}</p>
            <p>{country}</p>
        </div>
    )
}
