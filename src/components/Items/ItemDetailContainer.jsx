import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { getItem } from '../Utils/getItem';
import { useParams } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer () {

    const [item, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {

    const db = getFirestore()
    const detailRef = doc(db, "Productos", id)
    getDoc(detailRef).then(res => {setItems({id:res.id, ...res.data()})})
    }, [id])

    return (
        <>
            <ItemDetail producto={item}/>
        </>
    );
}
