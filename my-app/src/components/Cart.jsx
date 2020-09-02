import React from 'react'
import CartItem from "./CartItem"



export default function Cart({cart, removeFromCart}) {
console.log(cart);
    const cartItems=cart.map((boughtBier) => 
        <CartItem key={boughtBier.id} item={boughtBier} removeFromCart={removeFromCart}/>
)


    return (
        <>
        <h1>Items in cart</h1>
        <div className="products_wrapper">
        {cartItems}
        </div>
        </>
    )
}

