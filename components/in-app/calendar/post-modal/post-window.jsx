import React, { useState, useEffect } from 'react';
import {Button, Modal, Row, Col, Form, Card} from 'react-bootstrap';
import UsernameSelector from "@/components/in-app/calendar/post-modal/UsernameSelector";
import CaptionCreator from "@/components/in-app/calendar/post-modal/CaptionCreator";
import SchedulePost from "@/components/in-app/calendar/post-modal/SchedulePost";
import ImagePreview from "@/components/in-app/calendar/post-modal/ImagePreview";
import DragDropArea from "@/components/in-app/calendar/post-modal/DragDropArea";
import HashtagSetSelector from "@/components/in-app/calendar/post-modal/HashtagSetViewer";

export default function PostWindow() {
    const [showModal, setShowModal] = useState(false);
    const [caption, setCaption] = useState('');
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [usernames, setUsernames] = useState([]);
    const [selectedUsernames, setSelectedUsernames] = useState([]);
    const [draggedFile, setDraggedFile] = useState(null);
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduledDate, setScheduledDate] = useState('');
    const [scheduledTime, setScheduledTime] = useState('');
    const [isLoading, setIsLoading] = useState(false);


const removeUsername = (usernameToRemove) => {
    setSelectedUsernames(selectedUsernames.filter(account => account.username !== usernameToRemove.username || account.platform !== usernameToRemove.platform));
};

const handleCaptionChange = (newCaption) => {
        setCaption(newCaption);
    };

    const handleSetSelected = (set) => {
            setCaption(caption + ' ' + set.hashtags.join(' '));  // Füge die ausgewählten Hashtags zur Caption hinzu
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
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:5000/create-caption', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
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
        } catch (error) {
            console.error('Fehler:', error);
        }
        setIsLoading(false);
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
    if (!draggedFile) {
        console.log('Keine Datei ausgewählt');
        alert('Bitte wählen Sie eine Datei aus.');
        return;
    }

    const formData = new FormData();
    formData.append('file', draggedFile);
    formData.append('caption', caption);
    formData.append('accounts', JSON.stringify(selectedUsernames.map(account => account.username)));

    let url = 'http://localhost:5000/instagram-post-picture';

    if (isScheduled) {
        if (!scheduledDate || !scheduledTime) {
            console.log('Datum oder Uhrzeit nicht angegeben');
            alert('Bitte geben Sie sowohl Datum als auch Uhrzeit für den geplanten Post an.');
            return;
        }

        formData.append('date', scheduledDate);
        formData.append('time', scheduledTime);
        url = 'http://localhost:5000/plan-post'; // URL für geplanten Post
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Post erfolgreich gesendet:', responseData);
            alert('Post wurde erfolgreich gesendet.');
            handleCloseModal(); // Modal schließen und Zustände zurücksetzen
        } else {
            console.error('Fehler beim Senden des Posts');
            alert('Fehler beim Senden des Posts.');
        }
    } catch (error) {
        console.error('Netzwerkfehler:', error);
        alert('Netzwerkfehler beim Senden des Posts.');
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
            <Button className="button-create-post" onClick={() => setShowModal(true)}>Create Post</Button>

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
                        Erstelle neuen Post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={6}>

                                <SchedulePost
                                    isScheduled={isScheduled}
                                    setIsScheduled={setIsScheduled}
                                    scheduledDate={scheduledDate}
                                    setScheduledDate={setScheduledDate}
                                    scheduledTime={scheduledTime}
                                    setScheduledTime={setScheduledTime}
                                  />


                                <UsernameSelector
                                    usernames={usernames}
                                    selectedUsernames={selectedUsernames}
                                    onUsernameSelect={handleUsernameSelect}
                                    onRemoveUsername={removeUsername}
                                />

                                                   <CaptionCreator
                    caption={caption}
                    onCaptionChange={handleCaptionChange}
                    onCreateCaption={handleCreateCaption}
                    isLoading={isLoading}
                />
                                <HashtagSetSelector onSetSelected={handleSetSelected} />

                                <DragDropArea onDragOver={handleDragOver} onDrop={handleDrop} />
                            </Col>


                            <Col md={6}>
                               <ImagePreview imagePreviewUrl={imagePreviewUrl} />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="safe-post-button " onClick={handleSavePost}>
                        Save Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


