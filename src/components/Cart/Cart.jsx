import React, { useContext, useState } from 'react';
import { cartContext } from './CartContext'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "../../App.scss";
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { Col, Form, Row } from 'react-bootstrap';

export default function Cart() {
    const { cart, clear, removeItem } = useContext(cartContext)
    const total = [""]

    const  [email, setEmail]  = useState('');
    const  [name, setName]  = useState('');
    const  [lName, setLName]  = useState('');
    const  [phone, setPhone]  = useState('');
    const  [address, setAddress]  = useState('');
    const [ticket, setTicket] = useState();

    const sendOrder = () => {
        const order = {
            buyer: { name, lName, phone, email, address },
            items: cart,
            total: total.reduce((acc, adj) => +acc + +adj),
            date: serverTimestamp()
        };

        const db = getFirestore();
        const ticketCollection = collection(db, "tickets");
        addDoc(ticketCollection, order).then(({ id }) => setTicket(id));

        alert("acabas de realizar tu primera compra")
    };


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
                                                    total.push(subtotal)

                                                    return (
                                                        <li key={p.id} className="cart_item clearfix">
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
                                            <div className="order_total_amount" id="totalPrecio">{total.reduce((prev, next) => (+prev) + (+next))}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Form className="mt-5 container">
                    <div>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={name}
                                    placeholder="Ingresa tu nombre"
                                    onChange={(e) => {
                                        setName(e.currentTarget.value);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLName">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={lName}
                                    placeholder="Ingresa tu apellido"
                                    onChange={(e) => {
                                        setLName(e.currentTarget.value);
                                    }}
                                />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Direccion</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={address}
                                    placeholder="Ingresa tu dirección"
                                    onChange={(e) => {
                                        setAddress(e.currentTarget.value);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    value={phone}
                                    placeholder="Ingresa tu Telefono"
                                    onChange={(e) => {
                                        setPhone(e.currentTarget.value);
                                    }}
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                value={email}
                                placeholder="Ingresa tu Email"
                                onChange={(e) => {
                                    setEmail(e.currentTarget.value);
                                }}
                            />
                        </Form.Group>
                    </div>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check
                            type="checkbox"
                            label="Estoy de acuerdo con lo terminos y condiciones"
                        />
                    </Form.Group>
                    <div className="cart_buttons">
                                        <Link to="/" className="btn btn-outline-dark btn-lg mx-2 px-5">Seguir Comprando</Link>
                                    
                    <Link to="/create" className="btn btn-dark btn-lg ml-2 px-5 btnCompra">

                        <Button className="btn btn-dark btn-lg ml-2 px-5 btnCompr"
                            variant="primary"
                            ticket={ticket}
                            onClick={() => {
                                sendOrder()
                            }}
                        >
                            Finalizar compra
                        </Button>
                    </Link>
                    </div>
                </Form>
            </main>
        </>
    )
}