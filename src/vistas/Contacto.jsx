import React from "react";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";

export default function Contacto() {
  return (
    <>
      <Container className="justify-content-center text-center">
        <h1>Cuentanos, ¿en qué te podemos ayudar?</h1>
        <Form>
          <Form.Group className="mb-3 fw-bold">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="nombre@ejemplo.com" />
          </Form.Group>
          <Form.Group className="mb-3 fw-bold">
            <Form.Label>Descripción</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="danger">Enviar</Button>
        </Form>
      </Container>
    </>
  );
}
