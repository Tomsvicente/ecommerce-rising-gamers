import React, {useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {cartContext} from './CartContext';
import {Link} from 'react-router-dom';
import './_CartStyles.scss'

export default function CartWidget() {

    const {cart, cant} = useContext(cartContext);

    return (
    <>
    <div className="nav-link"> 
        <Link to="/cart" style={{textDecoration: "none"}}>
            <FontAwesomeIcon icon={faCartShopping} className="cart__icon text-white-50"></FontAwesomeIcon>
            {cart.length > 0 && <span className="cart__length text-white-50 fw-bold">{cant}</span>}
        </Link>
    </div>
    </>
);
};