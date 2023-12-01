import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Card3Functions() {
  return (
    <Card className="text-center card-function-card">
      <Card.Img variant="top" src="/Report-amico.png" className="w-50 mx-auto" />
      <Card.Body>
        <Card.Title className="card-title-bold">Kundenbericht</Card.Title>
        <Card.Text className="text-s">
          Erstelle aussagekräftige Kundenberichte – für eine transparente und informative Kundenkommunikation.
        </Card.Text>
        <Button variant="primary" className="mx-auto button-style button-color">
          Start
        </Button>
      </Card.Body>
    </Card>
  );
}
