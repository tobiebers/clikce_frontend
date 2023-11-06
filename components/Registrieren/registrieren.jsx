import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Login() {
  return (
    <Container>
      <Row noGutters style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5}>
          <div>
            <img className="img-size-logologin" src="logo.png" />
            <div className="img-size-googleandfacebook-container">
              <img className="img-size-googleandfacebook" src="facebook.png" alt="Facebook" />
              <img className="img-size-googleandfacebook" src="google.png" alt="Google" />
            </div>
          </div>
        </Col>
        <Col md={7} style={{ backgroundColor: '#4B8E94' }}>
          <div>
            <img className="img-size-logIn" src="register.png" alt="Bildbeschreibung" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}








