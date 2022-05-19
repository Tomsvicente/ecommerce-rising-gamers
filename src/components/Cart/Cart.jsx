import React, { useContext, useState } from 'react';
import { cartContext } from './CartContext'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "../../App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
    const { cart, clear, total, removeItem } = useContext(cartContext)


    return (
        <>
            <main className="productos">
                <div className="cart_section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="cart_container">
                                    <div className="cart_items">
                                        <ul className="cart_list">
                                            {cart.length !== 0 ? (
                                                cart.map((p) => {
                                                    const subtotal = parseInt(p.cantidad) * parseInt(p.precio)

                                                    return (
                                                        <li key={p.id} className="cart_item clearfix">
                                                            <div className="cart_delete">
                                                                <FontAwesomeIcon  onClick={() => removeItem(p)} icon={faTrash} />
                                                            </div>
                                                            <div className="cart_item_image mt-4"><img src={p.imagen} alt="producto" /></div>
                                                            <div className="cart_item_info d-flex flex-md-row justify-content-between">
                                                                <div className="cart_item_name cart_info_col">
                                                                    <div className="cart_item_title">Nombre</div>
                                                                    <div className="cart_item_text">{p.nombre}</div>
                                                                </div>
                                                                <div className="cart_item_color cart_info_col">
                                                                    <div className="cart_item_title">Modelo</div>
                                                                    <div className="cart_item_text"><span style={{ backgroundColor: '#000000' }} />{p.modelo}</div>
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
                                                    )
                                                })
                                            ) : (
                                                <>
                                                    <section className="container-fluid pt-5 my-5">
                                                        <div >
                                                            <h2>Esto parece que está un poco vacío</h2>
                                                            <p>¿No sabés qué comprar? seguí mirando nuestros productos</p>
                                                            <Link to="/" className="btn btn-outline-dark btn-lg mx-2 px-5">Volver al inicio</Link>
                                                        </div>
                                                    </section>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                    <div className="order_total">
                                        <div className="order_total_content text-end">
                                            <div className="order_total_title">Total de Compra:</div>
                                            <div className="order_total_amount" id="totalPrecio">{total}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart_buttons">
                                        <Link to="/" className="btn btn-outline-dark btn-lg mx-2 px-5">Seguir Comprando</Link>
                                    
                    

                        <Button className="btn btn-dark btn-lg ml-2 px-5 btnCompra"
                            variant="primary"
                            type="submit"
                            disabled={cart === 0}
                        ><Link to="/checkout" className="linkCompra" >Comprar</Link>
                            
                        </Button>
                    </div>
            </main>
        </>
    )
}