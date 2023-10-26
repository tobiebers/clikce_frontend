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
          <h2>Analytics</h2>
          <p className="text-s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore eti</p>
          <Button className="btn1 button-small" href="#">Erfahre mehr</Button>
        </Col>
      </Row>

      {/* Zweite Sektion */}
      <Row className="mb-4">
        <Col md={6}>
          <h2>Post Planen</h2>
          <p className="text-s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
          <Button className="btn1 button-small" href="#">Erfahre mehr</Button>
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
          <h2>Post Kreieren</h2>
          <p className="text-s">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
          <Button className="btn1 button-small" href="#">Erfahre mehr</Button>
        </Col>
      </Row>

    </Container>
  );
}
