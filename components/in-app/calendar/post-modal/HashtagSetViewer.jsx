import React, { useState, useEffect } from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

function HashtagSetSelector({ onSetSelected }) {
    const [showModal, setShowModal] = useState(false);
    const [hashtagSets, setHashtagSets] = useState([]);

    useEffect(() => {
        if (showModal) {
            fetchHashtagSets();
        }
    }, [showModal]);

    const fetchHashtagSets = async () => {
        try {
            const response = await fetch('http://localhost:5000/get-hashtag-sets');
            if (response.ok) {
                const data = await response.json();
                setHashtagSets(data.hashtagSets);
            } else {
                alert('Fehler beim Abrufen der Hashtag-Sets.');
            }
        } catch (error) {
            console.error('Netzwerkfehler:', error);
            alert('Netzwerkfehler beim Abrufen der Hashtag-Sets.');
        }
    };

   const handleSelectSet = (set) => {
        onSetSelected(set);
        setShowModal(false);
    };

    return (
        <>
            <Button className="create-caption-button ms-2" onClick={() => setShowModal(true)}>Hashtag-Sets anzeigen</Button>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Verfügbare Hashtag-Sets</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {hashtagSets.map((set, index) => (
                            <ListGroup.Item key={index} action onClick={() => handleSelectSet(set)}>
                                {set.name}: {set.hashtags.join(' ')}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default HashtagSetSelector;