import React, { useState, useEffect } from 'react';
import {Button, Modal, Row, Col, Form, Card} from 'react-bootstrap';
import UsernameSelector from "@/components/in-app/calendar/post-modal/UsernameSelector";
import CaptionCreator from "@/components/in-app/calendar/post-modal/CaptionCreator";

export default function PostWindow() {
    const [showModal, setShowModal] = useState(false);
    const [caption, setCaption] = useState('');
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [usernames, setUsernames] = useState([]);
    const [selectedUsernames, setSelectedUsernames] = useState([]);
    const [draggedFile, setDraggedFile] = useState(null);

const removeUsername = (usernameToRemove) => {
    setSelectedUsernames(selectedUsernames.filter(account => account.username !== usernameToRemove.username || account.platform !== usernameToRemove.platform));
};



    const handleOpenModal = () => setShowModal(true);
   const handleCloseModal = () => {
    console.log('Modal wird geschlossen, Zustände zurücksetzen'); // Zum Debuggen

    setShowModal(false);
    setCaption('');
    setImagePreviewUrl(null);
    setSelectedUsernames([]);

};



    const handleCreateCaption = async () => {
    const response = await fetch('http://localhost:5000/create-caption', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ caption }),
    });

    if (response.ok) {
        const data = await response.json();
        const generatedCaption = data.caption || '';
        const generatedHashtags = data.hashtags ? data.hashtags.join(' ') : '';
        setCaption(generatedCaption + ' ' + generatedHashtags);
    } else {
        console.log('Fehler beim Empfangen der Caption');
    }
};



   const fetchUsernames = async () => {
    const response = await fetch('http://localhost:5000/instagram-profiles');
    if (response.ok) {
        const data = await response.json();
        setUsernames(data.accounts); // Aktualisieren Sie dies entsprechend der Antwortstruktur
        console.log(data); // Überprüfen Sie die Struktur der Antwort hier

    }
};


    useEffect(() => {
        if (showModal) {
            fetchUsernames();
        }
    }, [showModal]);

   const handleUsernameSelect = (event) => {
    const account = JSON.parse(event.target.value);
    // Überprüfen, ob das ausgewählte Account-Objekt bereits in selectedUsernames vorhanden ist
    if (!selectedUsernames.some(selectedAccount => selectedAccount.username === account.username)) {
        setSelectedUsernames([...selectedUsernames, account]);
    }
};


  const handleSavePost = async () => {
    // Überprüfen, ob eine Datei ausgewählt wurde
    if (draggedFile) {
        // Erstellen eines FormData-Objekts für den Datei-Upload
        const formData = new FormData();
        formData.append('file', draggedFile); // Die ausgewählte Datei
        formData.append('caption', caption); // Die eingegebene Caption
        formData.append('accounts', JSON.stringify(selectedUsernames)); // Die ausgewählten Benutzernamen

        try {
            // Senden der FormData an Ihr Backend
            const response = await fetch('http://localhost:5000/instagram-post-picture', {
                method: 'POST',
                body: formData,
            });

            // Überprüfen, ob die Anfrage erfolgreich war
            if (response.ok) {
                const responseData = await response.json();
                console.log('Post erfolgreich gesendet:', responseData);
                // Hier können Sie weitere Aktionen durchführen, z.B. das Modal schließen
            } else {
                console.error('Fehler beim Senden des Posts');
            }
        } catch (error) {
            console.error('Fehler beim Senden des Posts:', error);
        }
    } else {
        console.log('Keine Datei ausgewählt');
    }
};




const handleDragOver = (event) => {
    event.preventDefault();
};

const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        setDraggedFile(file);
        setImagePreviewUrl(URL.createObjectURL(file)); // Für die Vorschau
    }
};


  return (
        <div>
            <Button onClick={() => setShowModal(true)}>Create Post</Button>

                <Modal
                    show={showModal}
                    onHide={handleCloseModal} // Verwenden Sie hier die handleCloseModal-Funktion
                    size="xl"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className="postModal"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create a New Post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <UsernameSelector
                                    usernames={usernames}
                                    selectedUsernames={selectedUsernames}
                                    onUsernameSelect={handleUsernameSelect}
                                    onRemoveUsername={removeUsername}
                                />
                                <CaptionCreator
                                    caption={caption}
                                    onCaptionChange={(e) => setCaption(e.target.value)}
                                    onCreateCaption={handleCreateCaption}
                                />

                         <div
                                    onDragOver={handleDragOver}
                                    onDrop={handleDrop}
                                    className="dragDropArea"
                                >
                                    Drag and drop a file here
                                </div>
                            </Col>
                            <Col md={6}>
                                {/* Rechte Spalte - Bildvorschau */}
                                {imagePreviewUrl && (
                                    <div>
                                        <h5>Bildvorschau:</h5>
                                        <img src={imagePreviewUrl} alt="Vorschau" style={{ width: '100%', height: 'auto' }} />
                                    </div>
                                )}
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>

                    <Button variant="primary" onClick={handleSavePost}>
                        Save Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


