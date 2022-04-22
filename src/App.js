import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartWidget from "./components/CartWidget";
import CartContextProvider from "./components/CartContext";

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
            <Route path="/cart" element={<CartWidget />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}
