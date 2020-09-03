import React from 'react'

export default function Card({name, color, country, img_url, id, price, addToCart}) {
    console.log(id);
    
    return (
        <div className="productCard" key={id}>
            <img src={img_url} alt="bier sort" className="bier-img"/>
            <h3 className="bier-name">{name}</h3>
            <p className="bier-color">{color}</p>
            <p className="bier-country">country: {country}
            </p>
            <p>price: {price}</p>

           

             <button className="shop-cart-btn" onClick={()=> addToCart(id)}>Add to <span id="trolly-icon">&#x1f6d2;</span></button> 

        </div>
    )
}