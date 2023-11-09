import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function Login() {
  return (
    <Container>
      <Row noGutters style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5} className="d-flex flex-column align-items-center top-container">
          <img className="img-size-logologin mx-auto" src="logo.png" />
          <div className="img-size-googleandfacebook-container">
            <img className="img-size-googleandfacebook" src="facebook.png" alt="Facebook" />
            <img className="img-size-googleandfacebook" src="google.png" alt="Google" />
          </div>
          <img className="img-size-or mx-auto" src="or.png" />
          <div className="text-container ml-auto mr-auto" style={{ width: '80%' }}>
            <div className="text-m mt-3 transparent-text">e-mail</div>
            <input type="text" className="white-input text-input" style={{ width: '100%' }} />
            <div className="text-m mt-3 transparent-text">password</div>
            <input type="text" className="white-input text-input" style={{ width: '100%' }} />
            <Form.Group controlId="rememberCheckbox" className="d-flex align-items-center mt-3">
              <Form.Check
              type="checkbox"
              label={<span className="checkbox-custom-label">Remember me</span>}
              className="checkbox-custom-input"
              style={{ backgroundColor: 'transparent' }}
              />
              <div className="text-m transparent-text ml-2">Forgot password?</div>
            </Form.Group>
            <button className="btn3 button-small">Register</button>
            <div className="text-m transparent-text mt-2">Don’t have an account yet? New Account</div>
          </div>
        </Col>
        <Col md={7} style={{ backgroundColor: '#4B8E94' }}>
          <div>
            <img className="img-size-logIn" src="LogInimage.png" alt="Bildbeschreibung" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
