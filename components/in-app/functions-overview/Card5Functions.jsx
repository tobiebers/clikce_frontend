import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Card5Functions() {
  return (
    <Card className="text-center card-function-card">
      <Card.Img variant="top" src="/Chat bot-cuate.png" className="w-50 mx-auto" />
      <Card.Body>
        <Card.Title className="card-title-bold">Bot erstellen</Card.Title>
        <Card.Text className="text-s">
          Entwickle Bots<br />
          schnell und einfach –<br />
          für automatisierte Prozesse<br />
          und verbesserte Kommunikation.
        </Card.Text>
        <Button variant="primary" className="mx-auto button-style button-color">
          Start
        </Button>
      </Card.Body>
    </Card>
  );
}
