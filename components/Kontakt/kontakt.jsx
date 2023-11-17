import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { SERVER_URL } from '../../config.js'; // Importieren Sie SERVER_URL aus Ihrer Konfigurationsdatei

export default function Kontakt() {
  const [vorname, setVorname] = useState('');
  const [nachname, setNachname] = useState('');
  const [email, setEmail] = useState('');
  const [handynummer, setHandynummer] = useState('');
  const [adresse, setAdresse] = useState('');
  const [land, setLand] = useState('');
  const [passwort, setPasswort] = useState('');
  const [meldung, setMeldung] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!email.includes('@')) {
      setMeldung('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      return;
    }

    const response = await fetch(`${SERVER_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        vorname: vorname,
        nachname: nachname,
        email: email,
        handynummer: handynummer,
        adresse: adresse,
        land: land,
        passwort: passwort,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      setMeldung('Daten erfolgreich an das Backend gesendet. Antwort: ' + JSON.stringify(data));
    } else {
      setMeldung('Fehler beim Senden der Daten an das Backend: ' + JSON.stringify(data));
    }
  };

  return (
    <Container>
      <Row noGutters style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5} style={{ textAlign: 'center' }}>
          <div style={{ width: '80%' }}>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="vorname">
                <Form.Label>Vorname:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Vorname"
                  value={vorname}
                  onChange={(e) => setVorname(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="nachname">
                <Form.Label>Nachname:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nachname"
                  value={nachname}
                  onChange={(e) => setNachname(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="handynummer">
                <Form.Label>Handynummer:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Handynummer"
                  value={handynummer}
                  onChange={(e) => setHandynummer(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="adresse">
                <Form.Label>Adresse:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Adresse"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="land">
                <Form.Label>Land:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Land"
                  value={land}
                  onChange={(e) => setLand(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="passwort">
                <Form.Label>Passwort:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Passwort"
                  value={passwort}
                  onChange={(e) => setPasswort(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Senden
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={7} style={{ backgroundImage: `url('Kontakt Form.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* Hier können Sie das Bild als Hintergrund einfügen */}
        </Col>
      </Row>
    </Container>
  );
}
