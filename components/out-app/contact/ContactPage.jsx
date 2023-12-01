import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert} from 'react-bootstrap';
import { SERVER_URL } from '../../../config.js';

export default function ContactPage() {
  // States for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [messageText, setMessageText] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // States for validation of form fields
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageTextValid, setMessageTextValid] = useState(true);

  // Function to check form fields
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

  // Handler for form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Sending form data to backend
    const response = await fetch(`${SERVER_URL}/contact`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({firstName, lastName, email, country, messageText}),
    });

    const data = await response.json();
    if (response.ok) {
      setResponseMessage('Ihre Nachricht wurde erfolgreich gesendet.');
    } else {
      setResponseMessage('Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.');
    }
  }

  // Function to display validation messages
  const renderValidationMessage = (isValid, message) => {
    return !isValid ? <div className="validation-message">{message}</div> : null;
  };

  // List of countries for dropdown menu
  const countries = ["Deutschland", "Österreich", "Schweiz", "Frankreich", "Italien", "Spanien"];

  return (
    <Container className="containerCustom">
      <Row className="rowCustom">
        <Col md={12} className="imgCustom">
          {/* Space for background image */}
        </Col>
      </Row>
      <Row className="formRowCustom">
        <Col md={{ span: 6, offset: 3 }} className="colForm">
          <div className="formWrapper">
            <Form onSubmit={handleFormSubmit}>
              {/* First Name */}
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

              {/* Last Name */}
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

              {/* Email */}
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

              {/* Country */}
              <Form.Group controlId="country" className="form-group-margin">
                <Form.Control as="select" value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option value="">Land auswählen</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              {/* Message */}
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

              {/* Submit Button */}
              {responseMessage && <Alert variant={response.ok ? "success" : "danger"}>{responseMessage}</Alert>}
              <Button variant="primary" type="submit" className="button-margin">
                Senden
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
