import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Kontakt() {
  return (
    <Container style={{ marginTop: '50px' }}>
      <Row noGutters style={{ backgroundColor: '#D6EBEA' }}>
        <Col style={{ backgroundColor: '#4B8E94' }}>
          <div style={{ padding: '20px' }}>
            <img
              src="Kontakt Form.png"
              alt="Kontaktformular"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
