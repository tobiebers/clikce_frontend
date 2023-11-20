import React, {useState} from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { SERVER_URL } from '../../config.js';


export default function Register() {

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    termsCheckbox: false,
  });

  const handleChange = (e) => {
  // Stelle sicher, dass e.target nicht null oder undefined ist
  if (!e.target) {
    console.error('Ungültiges Ziel in handleChange');
    return;
  }

  const { name, value, type, checked } = e.target;

  // Wenn es sich um ein Kontrollkästchen handelt, verwende checked, ansonsten value
  const newValue = type === 'checkbox' ? checked : value;

  setFormData((prevData) => ({
    ...prevData,
    [name]: newValue,
  }));
};


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(`${SERVER_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
    } else {
      console.error('Fehler beim Senden der Daten');
    }
  } catch (error) {
    console.error('Fehler beim Senden der Daten', error);
  }
};

 return (
    <Container>
      <Row noGutters style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5} className="d-flex flex-column align-items-start justify-content-center">
          <div>
            <img className="img-size-logologin mt-0" src="logo.png" alt="Logo" />
            <div className="img-size-googleandfacebook-container">
              <img className="img-size-googleandfacebook" src="facebook.png" alt="Facebook" />
              <img className="img-size-googleandfacebook" src="google.png" alt="Google" />
            </div>
            <img className="img-size-or mx-auto" src="or.png" alt="Or" />

            <Form onSubmit={handleSubmit}>
              {/* Fullname Textfeld */}
              <Form.Group controlId="formFullname">
                <Form.Label>Vor/- Nachname</Form.Label>
                <Form.Control
                  type="text"
                  className="w-input"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* E-mail Textfeld */}
              <Form.Group controlId="formEmail" className="mt-2">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="text"
                  className="w-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Username Textfeld */}
              <Form.Group controlId="formUsername" className="mt-2">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  className="w-input"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Password Textfeld */}
              <Form.Group controlId="formPassword" className="mt-2">
                <Form.Label>Passwort</Form.Label>
                <Form.Control
                  type="password"
                  className="w-input"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Checkbox unter den Textfeldern */}
              <Form.Group controlId="formCheckbox" className="checkbox-container text-center text-xs" style={{ marginTop: '20px' }}>
                <Form.Check
                  type="checkbox"
                  id="termsCheckbox"
                  label={
                    <>
                      Durch die Erstellung eines Kontos stimmen Sie den <br />
                      <span className="terms-of-use text-xs">Nutzungsbedingungen</span> und unseren&nbsp; <br />
                      <span className="privacy-policy text-xs">Datenschutzrichtlinie </span> zu.
                    </>
                  }
                  checked={formData.termsCheckbox}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Button in der Mitte positionieren */}
              <div className="flex-md-row-reverse text-center">
                <Button type="submit" className="mt-3 btn6 button-small">
                  Account erstellen
                </Button>
              </div>
            </Form>

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
