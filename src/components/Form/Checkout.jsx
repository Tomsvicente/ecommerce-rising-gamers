import React, { useContext, useState } from 'react';
import { collection, getFirestore, serverTimestamp, addDoc} from "firebase/firestore";
import { cartContext } from '../Cart/CartContext';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import "./_Checkout.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



export default function Checkout() {
    const { cart , clear, total } = useContext(cartContext)

    const[emailReq, setEmailReq] = useState("");
    const[cellphoneReq, setCellphoneReq] = useState(0);
    const handleEmailRequired = (e) => {setEmailReq(e.target.value)}
    const handleCellphoneRequired = (e) => {setCellphoneReq(e.target.value)}

    const [buyer, setBuyer] = useState({
        name: "",
        lName: "",
        phone: "",
        email: "",
        address: ""
    });

    const [ticket, setTicket] = useState('');

    const handleOnChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const sendOrder = () => {
        if(emailReq === ""){alert("Complete los campos obligatorios")}
        else if(cellphoneReq === 0){alert("Complete los campos obligatorios")}else{
        let orderDate = serverTimestamp();
        const order = {
            buyer: buyer,
            items: cart,
            total: total,
            date: orderDate
        }
        const db = getFirestore();
        const ticketsCollection = collection(db, "tickets");
        addDoc(ticketsCollection, order).then(({id})=> setTicket(id));
        clear();
        }
    }

    return (
        <>
        {ticket === "" && <> 
            <Form className="mt-5 container" onSubmit={() => sendOrder()}>
                <div className="col-lg-10 offset-lg-1">
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="name"
                                placeholder="Ingresa tu nombre"
                                onChange={handleOnChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="lName"
                                placeholder="Ingresa tu apellido"
                                onChange={handleOnChange}
                            />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name="address"
                                placeholder="Ingresa tu dirección"
                                onChange={handleOnChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridPhone">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                name="phone"
                                placeholder="Ingresa tu Telefono"
                                onChange={(e)=> {handleOnChange(e); handleCellphoneRequired(e)}}
                            />
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} className="mb-3" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            placeholder="Ingresa tu Email"
                            onChange={(e)=> {handleOnChange(e); handleEmailRequired(e)}}
                        />
                    </Form.Group>
                </div>
            </Form>
            </>}
            {ticket === "" ? <Button className="btn btn-dark btn-lg ml-2 px-5 btnCompra"
                            variant="primary"
                            type="submit"
                            onClick={() => sendOrder()}
                        >Finalizar Compra</Button> 
                        :
                        <div className="checkoutTicket bg-dark container mt-5 text-white-50">
                                <h2 className="my-5 text-white checkText">Información del Checkout
                                <FontAwesomeIcon icon={faShoppingCart} className="cart__icon text-white"></FontAwesomeIcon></h2>
                                <h3 className="mb-5 text-white-50 checkText">Id de compra: <span className="text-white fw-bold">{ticket}</span></h3>
                                <h5 className="mb-5 text-white-50 checkText">Con este id podrás recibir tu compra</h5>
                                <h5 className="mb-5 text-white-50 checkText">Si quieres seguir comprando clickea en el Logo en la barra de navegación.</h5>
                                <h4 className="mb-5 text-white-50 checkText">En estos días nos comunicaremos por mail y celular para acordar y confirmar el envío</h4>
                        </div>}
        </>
    )
}