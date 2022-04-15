import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import productos from '../Utils/productos';
import { useParams } from 'react-router-dom';
import customFetch from '../Utils/customFetch'

export default function ItemDetailContainer () {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        customFetch(500, productos , 'I', id)
            .then((res) => {setItems(res);})
            .catch((err) => console.log(err));
    }, [items, id]);

    return (
        <>
            <ItemDetail productos={productos}/>
        </>
    );
}
