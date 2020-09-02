import React from 'react'


export default function CartItem({item}) {
    //console.log(item);

    return (
        <div>
            <h1>Cart Item</h1>
            <div className="productCard" key={item.id}>
            <img src={item.img_url} alt="bier sort" className="bier-img"/>
            <h3 className="bier-name">{item.name}</h3>
            <p className="bier-color">{item.color}</p>
            <p className="bier-country">country: {item.country}
            </p>
            <p>price: {item.price}</p>
            
            </div> 
        </div>
    )
}
