import React from "react"
import { Link } from "react-router-dom"
import Logo from "../img/logo.png"

export default function Footer() {
    return <>
            <div className="mt-5">
                <footer className="text-center text-lg-start text-white bg-dark">
                    <div className="container container--width p-4 pb-0">
                        <section>
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <Link className="navbar-brand mb-6" to="/"><img src={Logo} alt="log" style={{width:'50px'}}/></Link>
                                    <p> Ecommerce realizado por Tomás Vicente sobre productos de computación e informática orientado al gaming. </p>
                                </div>
                                <hr className="w-100 clearfix d-md-none"/>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                                    <p>
                                        <Link to="/" className="text-white" href="views/contacto.html">Comunicate con nosotros</Link>
                                    </p>
                                    <p>
                                        <Link to="/" className="text-white">Sobre Nosotros</Link>
                                    </p>
                                    <p>
                                        <Link to="/" className="text-white">F.A.Q</Link>
                                    </p>
                                    <p>
                                        <Link to="/" className="text-white">Categorias</Link>
                                    </p>
                                </div>
                                <hr className="w-100 clearfix d-md-none"/>
                                <hr className="w-100 clearfix d-md-none"/>
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                                    <p><i className="fas fa-home mr-3"></i> Calle Inventada, 123, ARG</p>
                                    <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 11 111 1111</p>
                                    <p><i className="fas fa-print mr-3"></i> + 11 1111 1111</p>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Seguinos!</h6>
                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{backgroundColor: "#3b5998"}}
                                        to="/"
                                        role="button"
                                        ><i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{backgroundColor: "#55acee"}}
                                        to="/"
                                        role="button"
                                        ><i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{backgroundColor: "#dd4b39"}}
                                        to="/"
                                        role="button"
                                        ><i className="fab fa-google"></i>
                                    </Link>
                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{backgroundColor: "#ac2bac"}}
                                        to="/"
                                        role="button"
                                        ><i className="fab fa-instagram"></i>
                                    </Link>
                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{backgroundColor: "#0082ca"}}
                                        to="/"
                                        role="button"
                                        ><i className="fab fa-linkedin-in"></i>
                                    </Link>
                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{backgroundColor: "#333333"}}
                                        to="/"
                                        role="button"
                                        ><i className="fab fa-github"></i>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        © 2021 Copyright: <Link to="/" className="text-white">Tomas Vicente</Link>
                    </div>
                </footer>
            </div>
        </>
}