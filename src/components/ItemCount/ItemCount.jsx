import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function ItemCount({stock, onAdd}) {
    const [cant, setCant] = useState(0);

    const Incrementar = ()=>{
        if (cant < stock){
            setCant(cant + 1);
        }
    };

    const Disminuir = ()=>{
        if(cant > 0){
            setCant(cant - 1);
        }
    };

    const Reset = ()=>{
        setCant(0);
    }

    function onAdd(cant){
        alert("Agregaste " + cant + " productos al carrito!")
    }

    return (
        <>
        <div className="contador">
            <Button className="Incremento boton" onClick={Incrementar} variant="success">+</Button>
            <div className="cant">{cant}</div>
            <Button className="Decremento boton" onClick={Disminuir} variant="danger">-</Button>
        </div>    
        <div className="contador AddRes">   
        <Button className="Reset" onClick={Reset} variant="danger">Reset</Button>
        <Button className="Agregar" onClick={() => onAdd(cant)} variant="success">Agregar al carrito</Button>
        </div> 
        </>
    );
}