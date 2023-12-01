import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function CardsInfo() {
  return (
    <Container>
      <Row>
        {/* Abschnitt 1 */}
        <Col className="background-color-secondary">
          <img src="Pfad/zum/Bild1.jpg" alt="Bild 1" />
          <p>Text für Abschnitt 1</p>
        </Col>

        {/* Abschnitt 2 */}
        <Col className="background-color-secondary cards-info-abstand">
          <img src="Pfad/zum/Bild2.jpg" alt="Bild 2" />
          <p>Text für Abschnitt 2</p>
        </Col>

        {/* Abschnitt 3 */}
        <Col className="background-color-secondary cards-info-abstand">
          <img src="Pfad/zum/Bild3.jpg" alt="Bild 3" />
          <p>Text für Abschnitt 3</p>
        </Col>

        {/* Abschnitt 4 */}
        <Col className="background-color-secondary cards-info-abstand">
          <img src="Pfad/zum/Bild4.jpg" alt="Bild 4" />
          <p>Text für Abschnitt 4</p>
        </Col>
      </Row>
    </Container>
  );
}
