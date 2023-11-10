import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Registrieren() {
  return (
    <Container>
      <Row noGutters style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5} className="d-flex flex-column align-items-start justify-content-center">
          <div>
            <img className="img-size-logologin" src="logo.png" />
            <div className="img-size-googleandfacebook-container">
              <img className="img-size-googleandfacebook" src="facebook.png" alt="Facebook" />
              <img className="img-size-googleandfacebook" src="google.png" alt="Google" />
            </div>
            <img className="img-size-or mx-auto" src="or.png" />

            {/* Fullname Textfeld */}
            <div className="text-container">
              <p className="text-style transparent-bg">Fullname</p>
              <input type="text" className="white-input" />
            </div>

            {/* E-mail Textfeld */}
            <div className="text-container">
              <p className="text-style transparent-bg">E-mail</p>
              <input type="text" className="white-input" />
            </div>

            {/* Username Textfeld */}
            <div className="text-container">
              <p className="text-style transparent-bg">Username</p>
              <input type="text" className="white-input" />
            </div>

            {/* Password Textfeld */}
            <div className="text-container">
              <p className="text-style transparent-bg">Password</p>
              <input type="password" className="white-input" />
            </div>

            {/* Checkbox unter den Textfeldern */}
            <div className="checkbox-container text-center" style={{ marginTop: '0px' }}>
              <input type="checkbox" id="termsCheckbox" />
              <label htmlFor="termsCheckbox" className="checkbox-label smaller-text">
                By creating an account you agree to the<br />
                <span className="terms-of-use">terms of use</span> and our&nbsp;
                <span className="privacy-policy">privacy policy</span>.
              </label>
            </div>
            <button className="mt-3 btn6 button-small">Create Account</button>

            {/* Already have an account? Log in Text */}
            <p className="small-text text-center mt-1">
              Already have an account?{' '}
              <span className="login-text" style={{ color: '#FFB3B8' }}>
                Log In
              </span>
            </p>
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
