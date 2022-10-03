import React from "react";
import CardWidget from "./CardWidget";
import "./navBar.css";
import { Link } from "react-router-dom";

function NavBar() { 
    return (
        <nav className="ContenedorNav">
            <ul className="MenuNav">
                <li>
                    <Link to="/">Productos</Link>
                </li>
                <li>
                    <Link to="/categoria/cremas">Cremas</Link>
                </li>
                <li>
                    <Link to="/categoria/geles">Geles</Link>
                </li>
                <li>
                    <Link to="#datosContacto">Contacto</Link>
                </li>
                <li>
                    <Link to="#datosUbicación">Ubicación</Link>
                </li>
            </ul>
            <CardWidget/>
        </nav>
        
    );
}
export default NavBar;