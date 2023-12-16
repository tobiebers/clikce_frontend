import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import {Modal, ListGroup, Row, Col, Button} from 'react-bootstrap'; // Zusätzliche Importe für Modal und ListGroup

function Calendar1() {
    const [date, setDate] = useState(new Date());
    const [plannedPosts, setPlannedPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedDayPosts, setSelectedDayPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null); // Neuer Zustand für die ausgewählte Post-ID

    const handleInfoClick = (index) => {
        setSelectedPostId(index); // Setzt die ausgewählte Post-ID
    };

    useEffect(() => {
        const fetchPlannedPosts = async () => {
            const response = await fetch('http://localhost:5000/planned-posts');
            if (response.ok) {
                const posts = await response.json();
                setPlannedPosts(posts);
            }
        };

        fetchPlannedPosts();
    }, []);

    const onChange = (newDate) => {
        setDate(newDate);
    };

    const handleDayClick = (value) => {
        const dayPosts = plannedPosts.filter(post => new Date(post.date).toDateString() === value.toDateString());
        setSelectedDayPosts(dayPosts);
        setShowModal(true);
    };

    const renderTileContent = ({ date, view }) => {
        if (view === 'month') {
            const dayPosts = plannedPosts.filter(post => new Date(post.date).toDateString() === date.toDateString());
            return (
                <div>
                    {dayPosts.map((post, index) => (
                        <div key={index} style={{ color: 'blue', fontSize: '0.75em' }}>
                            x
                        </div>
                    ))}
                </div>
            );
        }
    };

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={date}
                tileContent={renderTileContent}
                onClickDay={handleDayClick} // Event-Handler für Klick auf ein Datum hinzufügen
            />

            {/* Modal für die Anzeige der geplanten Posts */}


           <Modal show={showModal} onHide={() => setShowModal(false)} className="calendar-modal" size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Geplante Posts</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    {/* Linke Spalte für die Posts */}
                    <Col>
                        <ListGroup>
                            {selectedDayPosts.map((post, index) => (
                                <ListGroup.Item key={index}>
                                    Account: {post.account}<br />
                                    Uhrzeit: {post.time}<br />
                                    <Button variant="info" onClick={() => handleInfoClick(index)}>Info</Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

                    {/* Rechte Spalte für die Detailinformationen des ausgewählten Posts */}
                    <Col>
                        {selectedPostId !== null && (
                            <div>
                                <h5>Details:</h5>

                                {/* Bild anzeigen, wenn die URL vorhanden ist */}
                                {selectedDayPosts[selectedPostId].picture && (
                                    <img
                                        src={`http://localhost:5000${selectedDayPosts[selectedPostId].picture}`}
                                        alt="Post Bild"
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                                 Caption: {selectedDayPosts[selectedPostId].caption}<br />
                            </div>
                        )}
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>


        </div>
    );
}

export default Calendar1;
