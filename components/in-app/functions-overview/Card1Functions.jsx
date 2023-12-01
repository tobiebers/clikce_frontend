import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Card1Functions() {
  return (
    <Card className="text-center card-function-card">
      <Card.Img variant="top" src="/Manage money-cuate.png" className="w-50 mx-auto" />
      <Card.Body>
        <Card.Title className="card-title-bold">Rechnung erstellen</Card.Title>
        <Card.Text className="text-s">
          Rechnungen spielend leicht erstellen<br />
          – für eine effiziente Verwaltung<br />
          deiner Finanzen.
        </Card.Text>
        <Button variant="primary" className="mx-auto button-style button-color">
          Start
        </Button>
      </Card.Body>
    </Card>
  );
}
