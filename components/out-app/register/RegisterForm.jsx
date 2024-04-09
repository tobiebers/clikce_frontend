import React, { useState } from "react";
import {Button, Form, Modal} from "react-bootstrap";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import '../../../firebaseConfig';
import { useRouter } from "next/router";


export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const router = useRouter();

  // Funktion zum Navigieren zu verschiedenen Pfaden
  const handleNavigation = (path) => {
    router.push(path);
  };

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    if (!e.target) {
      console.error('Ungültiges Ziel in handleChange');
      return;
    }

    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFirebaseRegister = async () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        setModalMessage('Registrierung erfolgreich. Willkommen bei !');
        setShowModal(true);
      })
      .catch((error) => {
        setModalMessage(`Fehler bei der Registrierung: ${error.message}`);
        setShowModal(true);
      });
  };

  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleFirebaseRegister();
  };

  return (
    <div className="mt-5">
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registrierungsnachricht</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Schließen
          </Button>
        </Modal.Footer>
      </Modal>

      <Form onSubmit={handleSubmit}>
        {/* Fullname Textfeld */}
        <Form.Group controlId="formFullname" className="mb-3 text-center">
          <Form.Label>Vor-/Nachname</Form.Label>
          <Form.Control
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Vollständiger Name"
            className="mx-auto d-block"
          />
        </Form.Group>

        {/* E-mail Textfeld */}
        <Form.Group controlId="formEmail" className="mb-3 text-center">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-Mail-Adresse"
            className="mx-auto d-block"
          />
        </Form.Group>

        {/* Password Textfeld */}
        <Form.Group controlId="formPassword" className="mb-3 text-center">
          <Form.Label>Passwort</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Passwort"
            className="mx-auto d-block"
          />
        </Form.Group>

        <div className="text-center">
          <Button type="submit" className="btn5 button-small mt-3">
            Account erstellen
          </Button>
        </div>
      </Form>


      <p className="small-text text-center me-2">
        Haben Sie bereits einen Account?{' '}
        <span className="login-text "  onClick={() => handleNavigation('/login')}>
          Log In
        </span>
      </p>
    </div>
  );
}
