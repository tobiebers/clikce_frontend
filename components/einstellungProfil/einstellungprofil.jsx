import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Einstellungprofil() {
  const formRef1 = useRef();
  const formRef2 = useRef();

  const branchenOptions = ['Option 1', 'Option 2', 'Option 3'];
  const spracheOptions = ['Deutsch', 'Englisch', 'Französisch'];

  const [selectedBranche, setSelectedBranche] = useState('');
  const [selectedSprache, setSelectedSprache] = useState('');
  const [formData, setFormData] = useState({
    topic1: '', // Add other form fields as needed
    topic2: '',
  });

  const handleBrancheChange = (selectedValue) => {
    setSelectedBranche(selectedValue);
  };

  const handleSpracheChange = (selectedValue) => {
    setSelectedSprache(selectedValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form handling logic here
  };

  return (
    <Container>
      <Row noGutters style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5} className="" style={{ textAlign: 'center' }}>
          <div>
            <p className="transparent-text persönlicheDaten-text abstand-links">Persönliche Daten</p>
            <p className="transparent-text abstand-links">Vorname:</p>
            <p className="transparent-text abstand-links">Nachname:</p>
            <p className="transparent-text abstand-links">Branche:</p>
            <p className="transparent-text abstand-links">Sprache:</p>
            <p className="transparent-text abstand-links">Passwort:</p>
            <p className="transparent-text abstand-links">Ziele:</p>
            <p className="transparent-text abstand-links abstand-zuZiele">Kurze Beschreibung:</p>
          </div>
        </Col>
        <Col md={7} style={{ backgroundColor: '#4B8E94' }}>
          <div>
            <div className="input-container abstand-oben">
              <input type="text" className="white-inputeinstellungProfil input-text"/>
            </div>
            <div className="input-container abstand-dazwischen">
              <input type="text" className="white-inputeinstellungProfil input-text"/>
            </div>
            <Form ref={formRef1} onSubmit={handleSubmit}>
              <Form.Group className="abstand-dazwischen2" controlId="formTopic1">
                <Form.Select className="white-input-dropdown dropdown-text" name="topic1" value={formData.topic} onChange={handleChange}>
                  <option value="">Wähle eine Branche</option>
                  <option value="Influencer">Influencer</option>
                  <option value="customerService">Customer Service</option>
                  <option value="partnershipInquiries">Partnership Inquiries</option>
                  <option value="feedbackAndSuggestions">Feedback and Suggestions</option>
                  <option value="bug report">Bug Report</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>
              {/* Add the rest of your form components here */}
            </Form>

            <Form ref={formRef2} onSubmit={handleSubmit}>
            <Form.Group className="abstand-dazwischen2" controlId="formTopic2">
              <Form.Select className="white-input-dropdown dropdown-text" name="topic2" value={formData.topic} onChange={handleChange}>
                <option value="">Wähle eine Sprache</option>
                <option value="technicalSupport">Deutsch</option>
                <option value="customerService">Englisch</option>
                <option value="partnershipInquiries">Italienisch</option>
                <option value="feedbackAndSuggestions">Feedback and Suggestions</option>
                <option value="bug report">Bug Report</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>
          </Form>

            <div className="input-container abstand-dazwischen">
              <input type="password" className="white-inputeinstellungProfil input-text abstand-dazwischen"/>
            </div>
            <textarea
              type="Beschreibung"
              className="white-inputZiele input-text abstand-dazwischen2"
            />
            <div className="input-container abstand-dazwischen">
              <textarea
                type="Beschreibung"
                className="white-inputZiele input-text abstand-dazwischen"
              />
            </div>
            <Button className="btn5" type="submit">
              Speichern
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
