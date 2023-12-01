import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Card6Functions() {
  return (
    <Card className="text-center card-function-card">
      <Card.Img variant="top" src="/Market launch-bro.png" className="w-50 mx-auto" />
      <Card.Body>
        <Card.Title className="card-title-bold">Werbestrategie</Card.Title>
        <Card.Text className="text-s">
          Gestalte überzeugende Werbestrategien – für effektives Marketing und maximale Reichweite.
        </Card.Text>
        <Button variant="primary" className="mx-auto button-style button-color">
          Start
        </Button>
      </Card.Body>
    </Card>
  );
}
