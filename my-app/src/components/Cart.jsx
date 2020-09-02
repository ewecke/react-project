import React from 'react'
import CartItem from "./CartItem"

export default function Cart({cart}) {
console.log(cart);
    const cartItems=cart.map(item => <CartItem key={item.id} item={item}/>) 

    return (
       {cartItems}
    )
}
