import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function Login() {
  return (
    <Container>
      <Row noGutters style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5} className="" style={{ textAlign: 'center' }}>
          <img className="img-size-logologin mx-auto" src="logo.png" />
          <div className="img-size-googleandfacebook-container">
            <img className="img-size-googleandfacebook" src="facebook.png" alt="Facebook" />
            <img className="img-size-googleandfacebook" src="google.png" alt="Google" />
          </div>
          <img className="img-size-or mx-auto" src="or.png" />
          <div className="" style={{ width: '80%' }}>
            <div className="transparent-text">E-Mail</div>
            <input type="text" className="white-input input-text" style={{ width: '100%' }} />
            <div className="transparent-text">Passwort</div>
            <input type="text" className="white-input input-text" style={{ width: '100%' }} />
            <Form.Group controlId="rememberCheckbox" className="d-flex align-items-center checkbox-custom-label">
              <div className="checkbox-custom-input"> {/* Hier wird die benutzerdefinierte Checkbox-Stilisierung angewendet */}
                <input type="checkbox" className="white-input" id="rememberCheckbox" />
                <label for="rememberCheckbox">Remember me?</label>
              </div>
              <div className="ml-auto password-forget-text">Passwort vergessen?</div>
            </Form.Group>
            <button className="mt-3 btn5 button-small">Login</button>
            <div className="new-account-text">
            Du hast noch keinen Account? <span className="highlighted">New Account</span>
            </div>
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
