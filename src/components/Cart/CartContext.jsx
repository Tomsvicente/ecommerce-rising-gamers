import React, {createContext, useState} from 'react'

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart , setCart] = useState([]);

    const addItem = (producto) => {
        const indiceItem = cart.findIndex((cartItem) => cartItem.id === producto.id);
        if (indiceItem !== -1) {
            const newCart = [...cart];
            newCart[indiceItem].cantidad =
            newCart[indiceItem].cantidad + producto.cantidad;
        setCart(newCart);
        } else {
        setCart([...cart, producto]);
        }
    };
    console.log(cart);

    const removeItem = (item) => {
        setCart(cart.filter((producto) => producto.id !== item.id));
    };

    const clear = () => setCart([]);

    const cant = cart.reduce((total, producto) => total + producto.cantidad, 0)


    const total = cart.reduce((total, producto)=>total+(producto.cantidad*producto.precio), 0);


    return (
            <cartContext.Provider value={{cart, addItem, removeItem, clear,cant,total }}>
                {children}
            </cartContext.Provider>
    );
};

export default CartContextProvider;