import React from 'react';
import { Spinner } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./loading.css";

function Loading() {
  return (
    <div className="divPadre">
        <div className="divHijo">
            <Spinner animation="border" variant="dark" className="spinnerBig"/>
        </div>
    </div>
  )
}

export default Loading;