import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Card1Functions from "@/components/in-app/functions-overview/Card1Functions";
import Card2Functions from "@/components/in-app/functions-overview/Card2Functions";
import Card3Functions from "@/components/in-app/functions-overview/Card3Functions";
import Card4Functions from "@/components/in-app/functions-overview/Card4Functions";
import Card5Functions from "@/components/in-app/functions-overview/Card5Functions";
import Card6Functions from "@/components/in-app/functions-overview/Card6Functions";

export default function Functions() {
  return (
    <div>
      {/* Erste Reihe mit 3 Cards */}
      <Row className="mb-4">
        {/* Card 1 */}
        <Col xs={4}>
          <Card1Functions/>
        </Col>

        {/* Card 2 */}
        <Col xs={4}>
          <Card2Functions/>
        </Col>

        {/* Card 3 */}
        <Col xs={4}>
          <Card3Functions/>
        </Col>
      </Row>

      {/* Zweite Reihe mit 3 Cards */}
      <Row>
        {/* Card 4 */}
        <Col xs={4}>
          <Card4Functions/>
        </Col>

        {/* Card 5 */}
        <Col xs={4}>
          <Card5Functions/>
        </Col>

        {/* Card 6 */}
        <Col xs={4}>
          <Card6Functions/>
        </Col>
      </Row>
    </div>
  );
}
