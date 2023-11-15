import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function einstellungProfil() {
  return (
    <Container>
      <Row noGutters style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5} className="" style={{ textAlign: 'center' }}>
          <div>
            <h1 className="transparent-text">Persönliche Daten</h1>
            <p className="transparent-text">Firstname:</p>
            <p className="transparent-text">Lastname:</p>
            <p className="transparent-text">Branche:</p>
            <p className="transparent-text">Sprache:</p>
            <p className="transparent-text">Passwort:</p>
            <p className="transparent-text">Ziele:</p>
            <p className="transparent-text">Kurze Beschreibung:</p>
          </div>
        </Col>
        <Col md={7} style={{ backgroundColor: '#4B8E94' }}>
          <div>
            <input type="text" className="white-input input-text" style={{ width: '100%' }} />
            <input type="text" className="white-input input-text" style={{ width: '100%' }} />
            <input type="text" className="white-input input-text" style={{ width: '100%' }} />
            <input type="text" className="white-input input-text" style={{ width: '100%' }} />
            <input type="text" className="white-input input-text" style={{ width: '100%' }} />
            <input type="text" className="white-input input-text" style={{ width: '100%' }} />
            <input type="text" className="white-input input-text" style={{ width: '100%' }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}


