import React from "react"
import { Link } from "react-router-dom"
import Logo from "../img/logo.png"

export default function NavBar() {
    return <>
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/"><img className="header__logo" src={Logo} alt="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>;
                    </button>;
                    <div className="collapse navbar-collapse header__burgerMenu" id="navbarSupportedContent">
                        <form className="d-flex header__search">
                            <input className="form-control me-2 header__form" type="search" placeholder="Buscar" aria-label="Search"/>
                            <button className="btn btn-outline-light" type="submit">Buscar</button>
                        </form>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                                <Link className="nav-link active text-white-50 fw-bold" aria-current="page" to="/category/monitores">Monitores</Link>
                                <Link className="nav-link active text-white-50 fw-bold" aria-current="page" to="/category/perifericos" >Perifericos</Link>
                            <li className="nav-item">
                                <a className="nav-link active text-white-50 fw-bold" aria-current="page" href="views/register.html">Registrarse</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white-50 fw-bold" aria-current="page" href="views/login.html">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white-50 fw-bold" aria-current="page" href="views/carrito.html"><i className="fas fa-shopping-cart"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
}