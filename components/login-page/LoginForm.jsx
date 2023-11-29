import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setModalMessage('Login erfolgreich! Weiterleitung...');
      setShowModal(true);
      setTimeout(() => {
        router.push('/');
      }, 2000); // Weiterleitung nach 2 Sekunden
    } catch (error) {
      setModalMessage(`Fehler beim Login: ${error.message}`);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="text-center">
      {/* Modal für Erfolgs- oder Fehlermeldungen */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login Nachricht</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Schließen
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Rest des Login-Formulars */}
      <img alt="Or" src="or.png" className="img-size-or mx-auto" />
      <Form onSubmit={handleLogin}>
        <div className="text-muted">E-Mail</div>
        <Form.Control
          type="text"
          className="bg-white text-dark mx-auto"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="text-muted">Passwort</div>
        <Form.Control
          type="password"
          className="bg-white text-dark mx-auto"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" className="btn5 button-small mt-3">
          Login
        </Button>

        <div>
          Du hast noch keinen Account? <span className="text-primary">New Account</span>
        </div>
      </Form>
    </Container>
  );
};