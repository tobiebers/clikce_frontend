import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Login() {
  return (
    <Container>
      <Row style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5}>
          {/* Hier kannst du den Inhalt für das 2/3 Rechteck hinzufügen */}
        </Col>
        <Col md={7} style={{ backgroundColor: '#4B8E94' }}>
          {/* Hier kannst du den Inhalt für das 1/3 Rechteck hinzufügen */}
        </Col>
      </Row>
    </Container>
  );
}