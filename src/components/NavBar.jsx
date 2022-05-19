
import { clear } from "@testing-library/user-event/dist/clear"
import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import Logo from "../img/logo.png"
import CartWidget from "./Cart/CartWidget"

export default function NavBar() {

    const[category, setCategory] = useState("");

    const handleSearch = (e) => {setCategory(e.target.value)}
    console.log(category);
    console.log(handleSearch);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.setCategory(e.target.value)
        }
    }
    return <>
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/"><img className="header__logo" src={Logo} alt="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>;
                    </button>;
                    <div className="collapse navbar-collapse header__burgerMenu" id="navbarSupportedContent">
                        <Form className="d-flex header__search">
                            <input className="form-control me-2 header__form" type="search" placeholder="Busca la categoria" onChange={handleSearch} aria-label="Search"/>
                            <Link className="btn btn-outline-light" type="submit" to={`/category/${category}`} >Buscar</Link>
                        </Form>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                                <Link className="nav-link active text-white-50 fw-bold" aria-current="page" to="/category/monitores">Monitores</Link>
                                <Link className="nav-link active text-white-50 fw-bold" aria-current="page" to="/category/perifericos" >Perifericos</Link>
                                <Link className="nav-link active text-white-50 fw-bold" aria-current="page" to="/category/video" >Video</Link>
                            <li className="nav-item">
                                <CartWidget/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
}