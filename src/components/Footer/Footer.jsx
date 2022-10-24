import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
            <span>NUESTRAS REDES SOCIALES:</span>
            </div>

            <div>
            <a href="https://www.facebook.com/" className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="https://www.twitter.com/" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" />
            </a>
            <a href="https://www.google.com/" className="me-4 text-reset">
                <MDBIcon fab icon="google" />
            </a>
            <a href="https://www.instagram.com/" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" />
            </a>
            <a href="https://www.linkedin.com/" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" />
            </a>
            <a href="https://www.github.com/" className="me-4 text-reset">
                <MDBIcon fab icon="github" />
            </a>
            </div>
        </section>

        <section className="">
            <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                    <MDBIcon icon="gem" className="me-3" />
                    MGZ-Estética Profesional
                </h6>
                <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Menu</h6>
                <p>
                    <Link to="/" className="text-reset">
                    Productos
                    </Link>
                </p>
                <p>
                    <Link to="/categoria/cremas" className="text-reset">
                    Cremas
                    </Link>
                </p>
                <p>
                    <Link to="/categoria/geles" className="text-reset">
                    Geles
                    </Link>
                </p>
                <p>
                    <Link to="#datosContacto" className="text-reset">
                    Contacto
                    </Link>
                </p>
                </MDBCol>

                <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <p>
                    <MDBIcon icon="home" className="me-2" />
                    Los geranios 3225, Mar del Plata, Buenos Aires
                </p>
                <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    mdzesteticaprofesional@example.com
                </p>
                <p>
                    <MDBIcon icon="phone" className="me-3" /> +54 223 445566
                </p>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        </section>

        <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
            © 2022 Copyright:
            <a className="text-reset fw-bold">MGZ-Estética Profesional</a>
        </div>
        </MDBFooter>
    );
}

export default Footer;
