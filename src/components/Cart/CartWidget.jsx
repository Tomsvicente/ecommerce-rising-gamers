import React, {useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {cartContext} from './CartContext';
import {Link} from 'react-router-dom';


export default function CartWidget() {

    const {cart, cantItems} = useContext(cartContext);

    return (
    <>
    <div className="nav-link"> 
        <Link to="/cart" style={{textDecoration: "none"}}>
            <FontAwesomeIcon icon={faCartShopping} className="cart__icon text-white-50"></FontAwesomeIcon>
        </Link>
            {cart.length > 0 && <span className="cart__length">{cantItems}</span>}
    </div>
    </>
);
};