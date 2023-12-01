import React from 'react';
import { Card, Button } from 'react-bootstrap';


export default function Card2Functions() {
  return (
    <Card className="text-center card-function-card">
      <Card.Img variant="top" src="/Group-pana.png" className="w-50 mx-auto" />
      <Card.Body>
        <Card.Title className="card-title-bold">Zielgruppenfinder</Card.Title>
        <Card.Text className="text-s">
          Entdecke mühelos deine Zielgruppen, entwickle gezielte Strategien und begeistere sie effektiv.
        </Card.Text>
        <Button variant="primary" className="mx-auto button-style button-color">
          Start
        </Button>
      </Card.Body>
    </Card>
  );
}
