import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

export default function Navegacion() {
  return (
    <>
      <Navbar bg="danger">
        <Container className="d-flex">
          <div>
            <Link to="/" className="text-white ms-3 text-decoration-none">
              🏠 Home
            </Link>
            <Link
              to="/contacto"
              className="text-white ms-3 text-decoration-none"
            >
              📒 Contacto
            </Link>
          </div>
          <Navbar.Brand className="text-white">Happy Cake 🍰</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
