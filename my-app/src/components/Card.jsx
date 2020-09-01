import React from 'react'

export default function Card({name, color, country, img_url, id}) {
    
    return (
        <div className="productCard" key={id}>
            <img src={img_url} alt="bier sort" className="bier-img"/>
            <h3 className="bier-name">{name}</h3>
            <p>{color}</p>
            <p className="bier-country">country: {country}</p>
        </div>
    )
}
