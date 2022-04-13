import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import s from './ItemCount.module.css';

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
        <div className={s.contador}>
            <Button className={s.btnSumar} onClick={Incrementar} variant="outline-secondary">+</Button>
            <div className={s.cant}>{cant}</div>
            <Button className={s.btnDisminuir} onClick={Disminuir} variant="outline-secondary">-</Button>
        </div>    
        <div className={s.btnContainer}>   
        <Button className="Agregar" onClick={() => onAdd(cant)} variant="outline-secondary">Agregar al carrito</Button>
        <Button className="Reset" onClick={Reset} variant="outline-secondary">Reset</Button>
        </div> 
        </>
    );
}