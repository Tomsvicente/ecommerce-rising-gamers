import React, { useContext }from 'react';
import {cartContext} from './CartContext'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cart, clear , removeItem} = useContext(cartContext)
    const total = [""]

    return(
        <>
            <main className="productos">
        <div className="cart_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cart_container">
                            <div className="cart_items">
                                    {cart.length !== 0 ? (
                                        cart.map((p) => {
                                            const subtotal = parseInt(p.cantidad) * parseInt(p.precio)
                                            total.push(subtotal)

                                            return(
                                                <ul key={p.id} className="cart_list">
                                                    <li className="cart_item clearfix">
                                                        <div className="cart_item_image"><img src={p.imagen} alt="producto"/></div>
                                                        <div className="cart_item_info d-flex flex-md-row justify-content-between">
                                                            <div className="cart_item_name cart_info_col">
                                                                <div className="cart_item_title">Nombre</div>
                                                                <div className="cart_item_text">{p.nombre}</div>
                                                            </div>
                                                            <div className="cart_item_color cart_info_col">
                                                                <div className="cart_item_title">Modelo</div>
                                                                <div className="cart_item_text"><span style={{backgroundColor:'#000000'}}/>{p.modelo}</div>
                                                            </div>
                                                            <div className="cart_item_quantity cart_info_col">
                                                                <div className="cart_item_title carritoCant">Cantidad</div>
                                                                <div className="cart_item_text form-control" >{p.cantidad}</div>
                                                            </div>
                                                            <div className="cart_item_price cart_info_col">
                                                                <div className="cart_item_title carritoItem">Precio</div>
                                                                <div className="cart_item_text carritoItemTotal" id="carritoItem1">{p.precio}</div>
                                                            </div>
                                                            <div className="cart_item_total cart_info_col">
                                                                <div className="cart_item_title">Total</div>
                                                                <div className="cart_item_text" id="carritoItemTot1">${subtotal}</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            )
                                        })
                                ) : (
                                    <>
                                        <section>
                                            <div className="container pt-5 mt-5 placeholder">
                                            <h1>Esto parece que está un poco vacío</h1>
                                            <p>¿No sabés qué comprar? seguí mirando nuestros productos</p>
                                            <Button>
                                                <Link to="/">Volver al inicio</Link>
                                            </Button>
                                            </div>
                                        </section>
                                    </>
                                )}
    
                            </div>
                            <div className="order_total">
                                <div className="order_total_content text-end">
                                    <div className="order_total_title">Total de Compra:</div>
                                    <div className="order_total_amount" id="totalPrecio">{total.reduce((prev,next) => (+prev) + (+next))}</div>
                                </div>
                            </div>
                            <div className="cart_buttons">
                                <Button type="button" className="btn btn-outline-dark btn-lg px-5"><a href="/index.html" className="linkOrden">Continuar Comprando</a></Button>
                                <Button type="button" className="btn btn-dark btn-lg px-5 btnCompra" onClick={clear}>Comprar</Button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
        </>
    )
}