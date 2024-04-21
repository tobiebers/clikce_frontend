import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Table, Container, Row, Col, Image } from 'react-bootstrap';

function ToggleLists() {
    const [key, setKey] = useState('planned');
    const [logs, setLogs] = useState([]);
    const [plannedPosts, setPlannedPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/logs')
            .then(response => response.json())
            .then(data => setLogs(data.logs))
            .catch(error => console.error('Error fetching logs:', error));

        fetch('http://localhost:5000/planned-posts')
            .then(response => response.json())
            .then(data => setPlannedPosts(data))
            .catch(error => console.error('Error fetching planned posts:', error));
    }, []);

    return (
        <Container className="mt-3">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="planned" title="Geplante Posts">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Datum</th>
                                <th>Zeit</th>
                                <th>Konto</th>
                                <th>Beschreibung</th>
                                <th>Bild</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plannedPosts.map((post, index) => (
                                <tr key={index}>
                                    <td>{post.date}</td>
                                    <td>{post.time}</td>
                                    <td>{post.account}</td>
                                    <td>{post.caption}</td>
                                    <td><Image src={post.picture} alt="Post" thumbnail /></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="logs" title="Bot-Logs">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Timestamp</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map((log, index) => (
                                <tr key={index}>
                                    <td>{log.timestamp}</td>
                                    <td>{log.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default ToggleLists;
