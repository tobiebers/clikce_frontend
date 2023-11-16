import React from 'react';
import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap';

export default function Einstellungprofil() {
  const branchenOptions = ['Option 1', 'Option 2', 'Option 3'];
  const spracheOptions = ['Deutsch', 'Englisch', 'Französisch'];

  return (
    <Container>
      <Row noGutters style={{ height: '600px', backgroundColor: '#D6EBEA' }}>
        <Col md={5} className="" style={{ textAlign: 'center' }}>
          <div>
            <p className="transparent-text persönlicheDaten-text abstand-links">Persönliche Daten</p>
            <p className="transparent-text abstand-links">Firstname:</p>
            <p className="transparent-text abstand-links">Lastname:</p>
            <p className="transparent-text abstand-links">Branche:</p>
            <p className="transparent-text abstand-links">Sprache:</p>
            <p className="transparent-text abstand-links">Passwort:</p>
            <p className="transparent-text abstand-links">Ziele:</p>
            <p className="transparent-text abstand-links">Kurze Beschreibung:</p>
          </div>
        </Col>
        <Col md={7} style={{ backgroundColor: '#4B8E94' }}>
          <div>
            <div className="input-container abstand-oben">
              <input type="text" className="white-input input-text"/>
            </div>
            <div className="input-container abstand-dazwischen">
              <input type="text" className="white-input input-text"/>
            </div>
            <div className="input-container abstand-dazwischen">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-branchen"
                  className="white-input input-text"
                >
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {branchenOptions.map((option, index) => (
                    <Dropdown.Item key={index}>{option}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="input-container abstand-dazwischen">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-sprache"
                  className="white-input input-text"
                >
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {spracheOptions.map((option, index) => (
                    <Dropdown.Item key={index}>{option}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="input-container abstand-dazwischen">
              <input type="text" className="white-input input-text abstand-dazwischen"/>
            </div>
              <textarea type="ziele" className="white-inputZiele input-text abstand-dazwischen"/>
            <div className="input-container abstand-dazwischen">
              <textarea type="Beschreibung" className="white-input input-text"/>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
