import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

export default function App() {
  return <>
    <div className="App">
      <NavBar />

      <ItemListContainer teclados={"Red Dragon"} monitor={"LG"} mouse={"Logitech Daedalus Prime"}/>

    </div>
  </>;
}

