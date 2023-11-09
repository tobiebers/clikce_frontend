import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function Login() {
  return (
    <Container>
      <Row noGutters style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5} className="">
          <img className="img-size-logologin mx-auto" src="logo.png" />
          <div className="img-size-googleandfacebook-container">
            <img className="img-size-googleandfacebook" src="facebook.png" alt="Facebook" />
            <img className="img-size-googleandfacebook" src="google.png" alt="Google" />
          </div>
          <img className="img-size-or mx-auto" src="or.png" />
          <div className="" style={{ width: '80%' }}>
            <div className="transparent-text">e-mail</div>
            <input type="text" className="white-input" style={{ width: '100%' }} />
            <div className="transparent-text">password</div>
            <input type="text" className="white-input" style={{ width: '100%' }} />
            <Form.Group controlId="rememberCheckbox" className="">
              <Form.Check
                type="checkbox"
                label={<span className=""></span>}
                className=""
              />
              <div className="">Forgot password?</div>
            </Form.Group>
            <button className="btn3 button-small">Register</button>
            <div className="">Don’t have an account yet? New Account</div>
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
