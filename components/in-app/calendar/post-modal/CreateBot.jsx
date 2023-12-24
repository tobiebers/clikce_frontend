import React, { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import UsernameSelector from "@/components/in-app/calendar/post-modal/UsernameSelector";

function CreateBot() {
  const [showModal, setShowModal] = useState(false);
  const [targetUsername, setTargetUsername] = useState('');
  const [followerCount, setFollowerCount] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedUsernames, setSelectedUsernames] = useState([]);
  const [usernames, setUsernames] = useState([]);
  const [likePosts, setLikePosts] = useState(false);
  const [commentOnPosts, setCommentOnPosts] = useState(false);
  const [commentMethod, setCommentMethod] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [sendMessage, setSendMessage] = useState(false);
  const [messageMethod, setMessageMethod] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const removeUsername = (usernameToRemove) => {
    setSelectedUsernames(selectedUsernames.filter(account => account.username !== usernameToRemove.username || account.platform !== usernameToRemove.platform));
  };

  useEffect(() => {
    if (showModal) {
      fetchUsernames();
    }
  }, [showModal]);

  const fetchUsernames = async () => {
    const response = await fetch('http://localhost:5000/instagram-profiles');
    if (response.ok) {
      const data = await response.json();
      setUsernames(data.accounts);
    }
  };

  const handleUsernameSelect = (event) => {
    const account = JSON.parse(event.target.value);
    if (!selectedUsernames.some(selectedAccount => selectedAccount.username === account.username)) {
      setSelectedUsernames([...selectedUsernames, account]);
    }
  };

  const handleSubmit = async () => {
    const botData = {
      selectedUsernames,
      targetUsername,
      followerCount,
      duration,
      likePosts,
      commentOnPosts,
      commentMethod,
      commentInput,
      sendMessage,
      messageMethod,
      messageInput
    };

    try {
      const response = await fetch('http://localhost:5000/create-bot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(botData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Antwort vom Server:', responseData);
        alert('Bot-Einstellungen erfolgreich gesendet.');
      } else {
        console.error('Fehler beim Senden der Daten');
        alert('Fehler beim Senden der Bot-Einstellungen.');
      }
    } catch (error) {
      console.error('Netzwerkfehler:', error);
      alert('Netzwerkfehler beim Senden der Bot-Einstellungen.');
    }

    handleCloseModal();
  };

  return (
    <div>
      <Button className="button-create-post" onClick={handleShowModal}>Bot-Einstellungen</Button>

      <Modal show={showModal} onHide={handleCloseModal} className="postModal" size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Bot-Einstellungen</Modal.Title>
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
              <Form.Label>Ziel Benutzer</Form.Label>
              <Form.Control type="text" value={targetUsername} onChange={(e) => setTargetUsername(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Follower Anzahl</Form.Label>
              <Form.Control type="number" value={followerCount} onChange={(e) => setFollowerCount(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Zeitraum in Tagen</Form.Label>
              <Form.Control type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
            </Form.Group>

            <Form.Check label="Beiträge liken" checked={likePosts} onChange={(e) => setLikePosts(e.target.checked)} />

            <Form.Check label="Beiträge kommentieren" checked={commentOnPosts} onChange={(e) => setCommentOnPosts(e.target.checked)} />
            {commentOnPosts && (
              <>
                <Form.Group>
                  <Form.Label>Kommentarmethode</Form.Label>
                  <Form.Control as="select" value={commentMethod} onChange={(e) => setCommentMethod(e.target.value)}>
                    <option value="">Wählen</option>
                    <option value="ki">Mit KI</option>
                    <option value="manuell">Ohne KI</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Kommentartext</Form.Label>
                  <Form.Control as="textarea" rows={3} value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Geben Sie Ihren Kommentar ein" />
                </Form.Group>
              </>
            )}

            <Form.Check label="Nachricht senden" checked={sendMessage} onChange={(e) => setSendMessage(e.target.checked)} />
            {sendMessage && (
              <>
                <Form.Group>
                  <Form.Label>Nachrichtenmethode</Form.Label>
                  <Form.Control as="select" value={messageMethod} onChange={(e) => setMessageMethod(e.target.value)}>
                    <option value="">Wählen</option>
                    <option value="ki">Mit KI</option>
                    <option value="manuell">Ohne KI</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Nachrichtentext</Form.Label>
                  <Form.Control as="textarea" rows={3} value={messageInput} onChange={(e) => setMessageInput(e.target.value)} placeholder="Geben Sie Ihre Nachricht ein" />
                </Form.Group>
              </>
            )}

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="safe-post-button" onClick={handleSubmit}>
            Speichern
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateBot;
