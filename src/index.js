import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUoRp22JTix7rIAD80QBM_ypaNXlEge64",
  authDomain: "rising-gamers.firebaseapp.com",
  projectId: "rising-gamers",
  storageBucket: "rising-gamers.appspot.com",
  messagingSenderId: "246179466053",
  appId: "1:246179466053:web:b894c56d2ea9af6f280c2c"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
