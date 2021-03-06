import "./App.scss";
import React from "react";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/Cart/CartContext";
import Footer from "./components/Footer";
import Checkout from "./components/Form/Checkout";

export default function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}
