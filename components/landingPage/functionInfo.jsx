import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


export default function FunctionInfo() {
  return (
    <Container>

      {/* Erste Sektion */}
      <Row className="mb-4">
        <Col md={6}>
          <img src="/Bild1.png" alt="Analytics" className="img-size img-fluid" />
        </Col>
        <Col md={6}>
          <h1>Analytics</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore eti</p>
          <Button variant="primary" href="#">Erfahre mehr</Button>
        </Col>
      </Row>

      {/* Zweite Sektion */}
      <Row className="mb-4">
        <Col md={6}>
          <h1>Post Planen</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
          <Button variant="primary" href="#">Erfahre mehr</Button>
        </Col>
        <Col md={6}>
          <img src="/Bild1.png" alt="Post Planen" className="img-size img-fluid" />
        </Col>
      </Row>

      {/* Dritte Sektion */}
      <Row className="mb-4">
        <Col md={6}>
          <img src="/Bild1.png" alt="Post Kreieren" className="img-size img-fluid" />
        </Col>
        <Col md={6}>
          <h1>Post Kreieren</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
          <Button variant="primary" href="#">Erfahre mehr</Button>
        </Col>
      </Row>

    </Container>
  );
}
