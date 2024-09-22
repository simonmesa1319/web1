import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Section() {
    let text1 = 'lorem'
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>{text1}</h1>
          <h2>Título 2</h2>
          <p>Lorem, ipsum dolor sit amet consectetur non polo vero delenaque!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Section;
