import React, { useState } from 'react';
import { Modal, Button, Form, Card } from 'react-bootstrap';

const InstagramAuth = () => {
    const [showModal, setShowModal] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernames, setUsernames] = useState([]);

    const connectInstagram = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const fetchUsernames = async () => {
        const response = await fetch('http://localhost:5000/instagram-profile-name');
        if (response.ok) {
            const data = await response.json();
            setUsernames(data.usernames);
        }
    };

    const handleConfirm = async () => {
        const response = await fetch('http://localhost:5000/instagram-profile-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            console.log('Daten erfolgreich gesendet');
            await fetchUsernames(); // Aktualisiert die Benutzernamenliste nur nach erfolgreichem POST
            handleCloseModal(); // Schließt das Modal
        } else {
            console.log('Fehler beim Senden der Daten');
        }
    };

    return (
        <div>
            <div className="vh-100 d-flex justify-content-center align-items-center">
              <Button className="btn2" onClick={connectInstagram} variant="primary">
                Verbinden mit Instagram
              </Button>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Instagram-Verbindung</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Benutzername</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Benutzername eingeben"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Passwort</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Passwort eingeben"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Schließen
                    </Button>
                    <Button className="bt2" onClick={handleConfirm}>
                        Bestätigen
                    </Button>
                </Modal.Footer>
            </Modal>

            <div>
                {usernames.map((username, index) => (
                    <Card key={index} className="mb-2">
                        <Card.Body>
                            <Card.Title>{username}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default InstagramAuth;
