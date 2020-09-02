import React from 'react'
import CartItem from "./CartItem"

export default function Cart({cart}) {
console.log(cart);
    const cartItems=cart.map((boughtBier) => 
        <CartItem key={boughtBier.id} item={boughtBier}/>
)


    return (
        <>
        <h1>Items in cart</h1>
        <div>
        {cartItems}
        </div>
        </>
    )
}

