import React, { useState } from 'react';

import { Container, Row, Col, Form } from 'react-bootstrap';
import { SERVER_URL } from '../../../config.js';




export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await fetch(`${SERVER_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    console.log(data); // Zeigt die Antwort des Servers
  };

  return (

      <Row noGutters style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5} style={{ textAlign: 'center' }}>
          <img className="img-size-or mx-auto" src="or.png" />
          <div style={{ width: '80%' }}>
            <div className="transparent-text">E-Mail</div>
            <input
              type="text"
              className="white-input input-text"
              style={{ width: '100%' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="transparent-text">Passwort</div>
            <input
              type="password"
              className="white-input input-text"
              style={{ width: '100%' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Group controlId="rememberCheckbox" className="d-flex align-items-center checkbox-custom-label">
              {/* ... Ihre Checkbox und Passwort vergessen Link */}
            </Form.Group>
            <button
              className="mt-3 btn5 button-small"
              onClick={handleLogin}
            >
              Login
            </button>
            <div className="new-account-text">
              Du hast noch keinen Account? <span className="highlighted">New Account</span>
            </div>
          </div>
        </Col>
        <Col md={7} style={{ backgroundColor: '#4B8E94' }}>
             <img className="img-size-logIn" src="LogInimage.png" alt="Bildbeschreibung" />
        </Col>
      </Row>

  );
}