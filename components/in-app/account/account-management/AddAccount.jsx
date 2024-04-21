import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

export default function AddAccount() {
    const [showModal, setShowModal] = useState(false);
    const [accountName, setAccountName] = useState('');
    const [password, setPassword] = useState('');
    const [platform, setPlatform] = useState('');

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSubmit = async () => {
    const accountData = {
        username: accountName,
        password: password,
        platform: platform,
    };

    try {
        const response = await fetch('http://localhost:5000/instagram-add-profile-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(accountData),
        });

        if (response.ok) {
            console.log('Account-Daten erfolgreich gesendet');
            handleCloseModal(); // Schließt das Modal nach dem Speichern
        } else {
            const errorResponse = await response.text(); // Erfasse die Fehlerantwort vom Server
            console.error('Fehler beim Senden der Account-Daten:', errorResponse);
        }
    } catch (error) {
        console.error('Netzwerkfehler:', error);
    }
};


    return (
        <>
            <Button className="btn2 button-small m-2" onClick={handleShowModal}>
                Account hinzufügen
            </Button>

            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Neuen Account hinzufügen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Account Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Account Name"
                                value={accountName}
                                onChange={(e) => setAccountName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Plattform</Form.Label>
                            <Form.Control as="select" value={platform} onChange={(e) => setPlatform(e.target.value)}>
                                <option value="">Wählen Sie eine Plattform</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Facebook">Facebook</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Schließen
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Speichern
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
