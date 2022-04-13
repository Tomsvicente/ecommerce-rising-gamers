import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import ItemListContainer from './components/Items/ItemListContainer';


export default function App() {
  return <>
    <div className="App">
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer/>

    </div>
  </>;
}

