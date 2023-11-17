import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { SERVER_URL } from '../../config.js';

export default function Einstellungprofil() {
  const [vorname, setVorname] = useState('');
  const [nachname, setNachname] = useState('');
  const [branche, setBranche] = useState('');
  const [sprache, setSprache] = useState('');
  const [password, setPassword] = useState('');
  const [ziele, setZiele] = useState('');
  const [beschreibung, setBeschreibung] = useState('');

    const handleEinstellungprofil = async () => {
    const response = await fetch(`${SERVER_URL}/einstellungProfil`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({
        vorname: vorname,
        nachname: nachname,
        branche: branche,
        sprache: sprache,
        password: password,
        ziele: ziele,
        beschreibung: beschreibung,

      }),
    });

    const data = await response.json();
    console.log(data); // Zeigt die Antwort des Servers
  };



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
              <input
                  type="text"
                  className="white-inputeinstellungProfil input-text"
                  value={vorname}
                  onChange={(e) => setVorname(e.target.value)}
              />
            </div>
            <div className="input-container abstand-dazwischen">
              <input
                  type="text"
                  className="white-inputeinstellungProfil input-text"
                  value={nachname}
                  onChange={(e) => setNachname(e.target.value)}
              />
            </div>
            <Form ref={formRef1} onSubmit={handleSubmit}>
              <Form.Group className="abstand-dazwischen2" controlId="formTopic1" value={branche}
                  onChange={(e) => setBranche(e.target.value)}>
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
            </Form>

            <Form ref={formRef2} onSubmit={handleSubmit}>
            <Form.Group className="abstand-dazwischen2" controlId="formTopic2" value={sprache}
                  onChange={(e) => setSprache(e.target.value)}>
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
              <input
                  type="password"
                  className="white-inputeinstellungProfil input-text abstand-dazwischen"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <textarea
              type="Beschreibung"
              className="white-inputZiele input-text abstand-dazwischen2"
              value={ziele}
                  onChange={(e) => setZiele(e.target.value)}
            />
            <div className="input-container abstand-dazwischen">
              <textarea
                type="Beschreibung"
                className="white-inputZiele input-text abstand-dazwischen"
                value={beschreibung}
                  onChange={(e) => setBeschreibung(e.target.value)}
              />
            </div>
            <Button className="btn5" type="submit" onClick={handleEinstellungprofil}>
              Speichern
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
