import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function CardsInfo() {
  return (
    <Container>
      <Row>
        {/* Abschnitt 1 */}
        <Col>
          <Card className="background-color-secondary">
            <Row>
              <Col md={4}>
                {/* Hier kannst du die Breite des Bildes anpassen (in diesem Fall auf 4 Spalten von 12) */}
                <Card.Img src="/Cards-Info-Herz.png" alt="Bild 3" className="card-img-centered img-responsive"/>
              </Col>
              <Col md={8}>
                {/* Hier ist der Textbereich (auf 8 Spalten von 12) */}
                <Card.Body>
                  <Card.Text>Text für Abschnitt 1</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Abschnitt 2 */}
        <Col>
          <Card className="background-color-secondary">
            <Row>
              <Col md={4}>
                <Card.Img src="/Cards-Info-Follower.png" alt="Bild 2" className="card-img-centered" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>Text für Abschnitt 2</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Abschnitt 3 */}
        <Col>
          <Card className="background-color-secondary">
            <Row>
              <Col md={4}>
                <Card.Img src="/Cards-Info-Leads.png" alt="Bild 3" className="card-img-centered"/>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>Text für Abschnitt 3</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Abschnitt 4 */}
        <Col>
          <Card className="background-color-secondary">
            <Row>
              <Col md={4}>
                <Card.Img src="/Cards-Info-Referrals.png" alt="Bild 4" className="card-img-centered" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>Text für Abschnitt 4</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
