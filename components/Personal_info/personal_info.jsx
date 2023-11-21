import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function PersonalInfo() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form>
            <Form.Group controlId="firstname">
              <Form.Label>Firstname:</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>

            <Form.Group controlId="lastname">
              <Form.Label>Lastname:</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>

            <Form.Group controlId="branch">
              <Form.Label>Branche:</Form.Label>
              <Form.Control type="text" placeholder="Enter branch" />
            </Form.Group>

            <Form.Group controlId="language">
              <Form.Label>Sprache:</Form.Label>
              <Form.Control as="select">
                <option value="Deutsch">Deutsch</option>
                <option value="Englisch">Englisch</option>
                {/* Weitere Optionen... */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="goals">
              <Form.Label>Ziele:</Form.Label>
              <Form.Control as="select">
                <option value="Ziel 1">Ziel 1</option>
                <option value="Ziel 2">Ziel 2</option>
                {/* Weitere Optionen... */}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Kurze Beschreibung:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Weiter
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}