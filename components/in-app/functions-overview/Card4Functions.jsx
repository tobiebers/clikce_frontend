import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Card4Functions() {
  return (
    <Card className="text-center card-function-card">
      <Card.Img variant="top" src="/Product presentation-rafiki.png" className="w-50 mx-auto" />
      <Card.Body>
        <Card.Title className="card-title-bold">Produkt erstellen</Card.Title>
        <Card.Text className="text-s">
          Kreiere Produkte im Handumdrehen – für innovative Ideen und erfolgreiche Umsetzungen.
        </Card.Text>
        <Button variant="primary" className="mx-auto button-style button-color">
          Start
        </Button>
      </Card.Body>
    </Card>
  );
}
