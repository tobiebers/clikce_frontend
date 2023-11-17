import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Registrieren() {
  return (
    <Container>
      <Row noGutters style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5} className="d-flex flex-column align-items-start justify-content-center">
          <div>
            <img className="img-size-logologin mt-0" src="logo.png" />
            <div className="img-size-googleandfacebook-container">
              <img className="img-size-googleandfacebook" src="facebook.png" alt="Facebook" />
              <img className="img-size-googleandfacebook" src="google.png" alt="Google" />
            </div>
            <img className="img-size-or mx-auto" src="or.png" />

            {/* Fullname Textfeld */}
            <div className="text-container">
              <p className="text-style transparent-bg">Vor/- Nachname</p>
              <input type="text" className="w-input" />
            </div>

            {/* E-mail Textfeld */}
            <div className="text-container mt-2">
              <p className="text-style transparent-bg">E-mail</p>
              <input type="text" className="w-input" />
            </div>

            {/* Username Textfeld */}
            <div className="text-container mt-2">
              <p className="text-style transparent-bg">Username</p>
              <input type="text" className="w-input" />
            </div>

            {/* Password Textfeld */}
            <div className="text-container mt-2">
              <p className="text-style transparent-bg">Passwort</p>
              <input type="password" className="w-input" />
            </div>

            {/* Checkbox unter den Textfeldern */}
            <div className="checkbox-container text-center" style={{ marginTop: '20px' }}>
              <input type="checkbox" id="termsCheckbox" />
              <label htmlFor="termsCheckbox" className="checkbox-label smaller-text">
                Durch die Erstellung eines Kontos stimmen Sie den<br />
                <span className="terms-of-use">Nutzungsbedingungen</span> und unseren&nbsp; <br />
                <span className="privacy-policy">Datenschutzrichtlinie </span> zu.
              </label>
            </div>

            {/* Button in der Mitte positionieren */}
            <div className="flex-md-row-reverse text-center">
              <button className="mt-3 btn6 button-small">Account erstellen</button>
            </div>

            {/* Already have an account? Log in Text */}
            <p className="small-text text-center me-2">
              Haben Sie bereits einen Account?{' '}
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
