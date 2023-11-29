import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { SERVER_URL } from '../../../config.js';

export default function SettingProfil() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [branche, setBranche] = useState('');
  const [language, setLanguage] = useState('');
  const [password, setPassword] = useState('');
  const [goals, setGoals] = useState('');
  const [description, setDescription] = useState('');


    const handleSettingprofil = async () => {
    const response = await fetch(`${SERVER_URL}/settingProfil`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        branche: branche,
        language: language,
        password: password,
        goals: goals,
        description: description,

      }),
    });

    const data = await response.json();
    console.log(data);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
        <div>
          <Form onSubmit={handleSubmit}>
            <div>
              <div className="input-container abstand-oben">
                <input
                  type="text"
                  className="white-inputeinstellungProfil input-text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  className="white-inputeinstellungProfil input-text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <Form.Group className="mt-3" controlId="formTopic1">
                <Form.Select
                  className="white-input-dropdown dropdown-text"
                  name="topic1"
                  value={branche}
                  onChange={(e) => setBranche(e.target.value)}
                >
                  <option value="Business">Wähle eine Branche</option>
                  <option value="Influencer">Influencer</option>
                  <option value="customerService">Customer Service</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mt-3" controlId="formTopic2">
                <Form.Select
                  className="white-input-dropdown dropdown-text"
                  name="topic2"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="">Wähle eine Sprache</option>
                  <option value="Deutsch">Deutsch</option>
                  <option value="Englisch">Englisch</option>
                </Form.Select>
              </Form.Group>
              <div className="mt-3">
                <input
                  type="password"
                  className="white-inputeinstellungProfil input-text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mt-3">
              <textarea
                type="text"
                className="white-inputZiele input-text"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
              />
              </div>
              <div className="mt-3">
                <textarea
                  type="text"
                  className="white-inputZiele input-text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <Button className="btn2 button-small float-end" type="submit" onClick={handleSettingprofil}>
                Speichern
              </Button>
                </div>
          </Form>
        </div>
  );
}