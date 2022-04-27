import React, {useContext} from 'react';
import {CartContext} from '../CartContext'


export default function CartDetail() {
    const {cart, removeFromCart, buyAll, cant} = useContext(CartContext);

    let total = cant();
    return (
        <>
            
        </>
    )
}