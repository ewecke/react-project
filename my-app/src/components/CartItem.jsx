import React from 'react'


export default function CartItem({item, removeFromCart}) {
    //console.log(item);

    return (
            <div className="productCard" key={item.id}>
                <img src={`${item.image_url}`} alt="bier sort" className="bier-img"/>
                <h3 className="bier-name">{item.name}</h3>
                <p className="bier-color">{item.color}</p>
                <p className="bier-country">country: {item.country}
                </p>
                <p>price: {item.price}</p>
                <button onClick={() => {removeFromCart(item.id)}}>&#128465;</button>
            </div>
    )
}