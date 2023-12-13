import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { SERVER_URL } from '@/config';

export default function ContactPage() {
  // States für die Formularfelder
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [messageText, setMessageText] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // States für die Validierung der Formularfelder
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageTextValid, setMessageTextValid] = useState(true);

  // State für die Anzeige des Modals
  const [modalShow, setModalShow] = useState(false);

  // Funktion zur Überprüfung der Formularfelder
  const validateForm = () => {
    let isValid = true;
    setFirstNameValid(!!firstName);
    setLastNameValid(!!lastName);
    setEmailValid(email.includes('@'));
    setMessageTextValid(!!messageText);

    if (!firstName || !lastName || !email.includes('@') || !messageText) {
      isValid = false;
    }

    return isValid;
  };

  // Handler für das Absenden des Formulars
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(`${SERVER_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, country, messageText }),
      });

      const data = await response.json();
      setResponseMessage(response.ok ? data.message : 'Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.');
      setModalShow(true);
    } catch (error) {
      setResponseMessage('Fehler beim Senden Ihrer Nachricht. Bitte überprüfen Sie Ihre Netzwerkverbindung.');
      setModalShow(true);
    }
  };

  // Funktion zur Anzeige von Validierungsnachrichten
  const renderValidationMessage = (isValid, message) => {
    return !isValid ? <div className="validation-message">{message}</div> : null;
  };

  // Liste der Länder für das Dropdown-Menü
  const countries = ["Deutschland", "Österreich", "Schweiz", "Frankreich", "Italien", "Spanien"];

  return (
    <Container className="containerCustom">
      <Row className="rowCustom">
        <Col md={12} className="imgCustom">
          {/* Platz für Hintergrundbild */}
        </Col>
      </Row>
      <Row className="formRowCustom">
        <Col md={{ span: 6, offset: 3 }} className="colForm">
          <div className="formWrapper">
            <Form onSubmit={handleFormSubmit}>
              {/* Vorname */}
              {renderValidationMessage(firstNameValid, 'Bitte geben Sie Ihren Vornamen ein.')}
              <Form.Group controlId="firstName" className="form-group-margin">
                <Form.Control
                  type="text"
                  placeholder="Vorname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  isInvalid={!firstNameValid}
                />
              </Form.Group>

              {/* Nachname */}
              {renderValidationMessage(lastNameValid, 'Bitte geben Sie Ihren Namen ein.')}
              <Form.Group controlId="lastName" className="form-group-margin">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  isInvalid={!lastNameValid}
                />
              </Form.Group>

              {/* E-Mail */}
              {renderValidationMessage(emailValid, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.')}
              <Form.Group controlId="email" className="form-group-margin">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!emailValid}
                />
              </Form.Group>

              {/* Land */}
              <Form.Group controlId="country" className="form-group-margin">
                <Form.Control as="select" value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option value="">Land auswählen</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              {/* Nachricht */}
              {renderValidationMessage(messageTextValid, 'Bitte geben Sie eine Nachricht ein.')}
              <Form.Group controlId="messageText" className="form-group-margin">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Nachricht"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  isInvalid={!messageTextValid}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="button-margin">
                Senden
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Nachrichtenstatus
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{responseMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Schließen</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
