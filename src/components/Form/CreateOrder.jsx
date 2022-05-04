// import { addDoc, collection, getFirestore } from 'firebase/firestore';
// import React, { useContext } from 'react';
// import { cartContext } from '../Cart/CartContext';


// const CreateOrder = () => {

//     const {cart, buy} = useContext(cartContext)

//     const order = {
//         buyer: {name,lName, adress, phone, email},
//         items:cart,
//         total: 200
//     }

//     const db = getFirestore()
//     const orderCollection = collection(db, "ordenes")
//     addDoc(orderCollection, order).then(({id})=> setOrderId(id))
//     return(
//         <div>Enviar orden</div>
//     )
// };


// export default CreateOrder
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function MadePurchase({ticket}) {

    console.log(ticket)
  return (
    <>
      <section>
        <div className="container pt-5 mt-5">
          <h1>¡FELICITACIONES!</h1>
          <p>Acaba de finalizar su compra</p>
          <p>{}Su número de ticket es {}</p>

          <Link to="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default MadePurchase;