import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

function HashtagSetCreator() {
    const [showModal, setShowModal] = useState(false);
    const [currentHashtag, setCurrentHashtag] = useState('');
    const [hashtags, setHashtags] = useState([]);
    const [setName, setSetName] = useState('');

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleHashtagChange = (e) => {
        const value = e.target.value.replace(/\s+/g, ''); // Entfernen von Leerzeichen
        if (!value.startsWith('#')) {
            setCurrentHashtag('#' + value); // Füge ein '#' hinzu, wenn der Benutzer es nicht tut
        } else {
            setCurrentHashtag(value);
        }
    };

    const addHashtag = () => {
        if (currentHashtag && !hashtags.includes(currentHashtag)) {
            setHashtags([...hashtags, currentHashtag]);
            setCurrentHashtag(''); // Setze das aktuelle Hashtag zurück
        }
    };

    const handleSubmit = async () => {
        const hashtagSetData = {
            name: setName,
            hashtags: hashtags,
        };

        try {
            const response = await fetch('http://localhost:5000/create-hashtag-set', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(hashtagSetData),
            });

            if (response.ok) {
                alert('Hashtag-Set erfolgreich erstellt.');
                handleCloseModal(); // Modal schließen und Zustände zurücksetzen
            } else {
                alert('Fehler beim Erstellen des Hashtag-Sets.');
            }
        } catch (error) {
            console.error('Netzwerkfehler:', error);
            alert('Netzwerkfehler beim Erstellen des Hashtag-Sets.');
        }
    };

    return (
        <div>
            <Button onClick={handleShowModal} className="button-create-post">Erstelle # Set</Button>

            <Modal show={showModal} onHide={handleCloseModal} centered className="postModal" size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Erstelle # Set</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label># Hashtag</Form.Label>
                            <Form.Control type="text" value={currentHashtag} onChange={handleHashtagChange} placeholder="Hashtag eingeben"/>
                        </Form.Group>
                        <Button onClick={addHashtag} className="add-hashtag-button">Hinzufügen</Button>
                        <Form.Group>
                            <Form.Label>Hashtags</Form.Label>
                            <Form.Control as="textarea" rows={3} readOnly value={hashtags.join(' ')} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Titel des Sets</Form.Label>
                            <Form.Control type="text" value={setName} onChange={(e) => setSetName(e.target.value)} placeholder="Set Name eingeben" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmit} className="safe-set-button">Speichern</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default HashtagSetCreator;
