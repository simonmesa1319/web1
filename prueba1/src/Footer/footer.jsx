import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Sobre Nosotros</h5>
            <p>Somos una empresa dedicada a proporcionar soluciones tecnológicas innovadoras.</p>
          </Col>
          <Col md={4}>
            <h5>Enlaces Útiles</h5>
            <ul>
              <li><a href="#home" className="text-white">Inicio</a></li>
              <li><a href="#services" className="text-white">Servicios</a></li>
              <li><a href="#contact" className="text-white">Contacto</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <p>Email: info@ejemplo.com</p>
            <p>Teléfono: +123 456 7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;