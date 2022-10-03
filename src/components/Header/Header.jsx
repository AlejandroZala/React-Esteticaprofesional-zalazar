import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="App-header">
        <div>
            <img src="/imagenes/logoda.jpg" className="App-logo" alt="logo" />
        </div>
        <Link to="/" className="TituloBrand">
            <h1>Estética Profesional</h1> 
        </Link>

    </header>
  );
}

export default Header;