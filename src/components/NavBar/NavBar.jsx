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
        
    //     <nav className="navbar navbar-expand-lg ContenedorNav">
    //     <button clasName="navbar-toggler NavToggler" type="button" data-toggle="collapse"  data-target="#navbarNavAltMarkup" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon NavToggler"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="MenuNav">
    //                 <li className="nav-item">
    //                     <Link to="/">Productos</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to="/categoria/cremas">Cremas</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to="/categoria/geles">Geles</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to="#datosContacto">Contacto</Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link to="#datosUbicación">Ubicación</Link>
    //                 </li>
    //             </ul>
    //     </div>
    //     <CardWidget/>
    // </nav>
    );
}
export default NavBar;