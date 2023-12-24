import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import UsernameSelector from "@/components/in-app/calendar/post-modal/UsernameSelector";

function PostPlannerModal() {
    const [showModal, setShowModal] = useState(false);
    const [files, setFiles] = useState([]);
    const [postCount, setPostCount] = useState(1);
    const [times, setTimes] = useState(["12:00"]);
    const [startDate, setStartDate] = useState('');
    const [usernames, setUsernames] = useState([]);
    const [selectedUsernames, setSelectedUsernames] = useState([]);

    useEffect(() => {
        const fetchUsernames = async () => {
            const response = await fetch('http://localhost:5000/instagram-profiles');
            if (response.ok) {
                const data = await response.json();
                setUsernames(data.accounts);
            }
        };
        fetchUsernames();
    }, []);

    const handleFileChange = (e) => {
        setFiles([...e.target.files]);
    };

    const handlePostCountChange = (e) => {
        const count = parseInt(e.target.value, 10);
        setPostCount(count);
        setTimes(new Array(count).fill("12:00"));
    };

    const handleTimeChange = (index, time) => {
        const updatedTimes = [...times];
        updatedTimes[index] = time;
        setTimes(updatedTimes);
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        for (const file of files) {
            formData.append('files', file);
        }
        formData.append('postTimes', JSON.stringify(times));
        formData.append('accounts', JSON.stringify(selectedUsernames.map(account => account.username)));
        formData.append('startDate', startDate);

        try {
            const response = await fetch('http://localhost:5000/schedule-bulk-posts', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert('Beiträge erfolgreich geplant.');
            } else {
                alert('Fehler beim Planen der Beiträge.');
            }
        } catch (error) {
            alert('Netzwerkfehler beim Planen der Beiträge.');
        }
    };

    const handleUsernameSelect = (event) => {
        const account = JSON.parse(event.target.value);
        if (!selectedUsernames.some(selectedAccount => selectedAccount.username === account.username)) {
            setSelectedUsernames([...selectedUsernames, account]);
        }
    };

    const removeUsername = (usernameToRemove) => {
        setSelectedUsernames(selectedUsernames.filter(account => account.username !== usernameToRemove.username || account.platform !== usernameToRemove.platform));
    };

    return (
        <div>
            <Button onClick={() => setShowModal(true)} className="button-create-post">Plan Posts</Button>

            <Modal show={showModal} onHide={() => setShowModal(false)} centered className="postModal" size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Plan Posts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <UsernameSelector
                            usernames={usernames}
                            selectedUsernames={selectedUsernames}
                            onUsernameSelect={handleUsernameSelect}
                            onRemoveUsername={removeUsername}
                        />

                        <Form.Group>
                            <Form.Label>Dateien auswählen</Form.Label>
                            <Form.Control type="file" multiple onChange={handleFileChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Anzahl der Beiträge pro Tag</Form.Label>
                            <Form.Control type="number" value={postCount} onChange={handlePostCountChange} />
                        </Form.Group>

                        {times.map((time, index) => (
                            <Form.Group key={index}>
                                <Form.Label>Uhrzeit für Beitrag {index + 1}</Form.Label>
                                <Form.Control type="time" value={time} onChange={(e) => handleTimeChange(index, e.target.value)} />
                            </Form.Group>
                        ))}

                        <Form.Group>
                            <Form.Label>Startdatum</Form.Label>
                            <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmit} className="safe-post-button">Speichern</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default PostPlannerModal;
