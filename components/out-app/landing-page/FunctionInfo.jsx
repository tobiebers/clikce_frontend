import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


export default function FunctionInfo() {
  return (
    <Container>

      {/* Erste Sektion */}
      <Row className="mb-4">
        <Col md={6}>
          <img src="/Analytics.png" alt="Analytics" className="img-size img-fluid" />
        </Col>
        <Col md={6}>
          <h2>Analytics</h2>
          <p className="text-m">Instagram-Analytics analysiert Daten wie die Bindung und den Follower-Wachstum. Diese Einblicke helfen Nutzern, ihre Strategien zu optimieren und den Erfolg ihrer Inhalte auf der Plattform zu steigern.</p>
          <Button className="btn1 button-medium" href="#">Erfahre mehr</Button>
        </Col>
      </Row>

      {/* Zweite Sektion */}
      <Row className="mb-4">
        <Col md={6}>
          <h2>Mehrere Post planen</h2>
          <p className="text-m">Instagram-Post-Planung bedeutet, Beiträge strategisch vorzubereiten und zeitlich abzustimmen. Durch kluge Planung und Tools können Nutzer ihre Inhalte optimal veröffentlichen, um eine größere Reichweite und höheres Engagement zu erzielen.</p>
          <Button className="btn1 button-medium" href="#">Erfahre mehr</Button>
        </Col>
        <Col md={6}>
          <img src="/PostPlanen.png" alt="Post Planen" className="img-size img-fluid" />
        </Col>
      </Row>

      {/* Dritte Sektion */}
      <Row className="mb-4">
        <Col md={6}>
          <img src="/CreateAPost.png" alt="Post Kreieren" className="img-size img-fluid" />
        </Col>
        <Col md={6}>
          <h2>Post Kreieren</h2>
          <p className="text-m">Instagram-Post-Kreation beinhaltet das Erstellen ansprechender visueller und textlicher Inhalte für die Plattform. Kreative Elemente wie Bilder, Videos und Hashtags werden verwendet, um die Aufmerksamkeit der Zielgruppe zu gewinnen und die Interaktion zu fördern.</p>
          <Button className="btn1 button-medium" href="#">Erfahre mehr</Button>
        </Col>
      </Row>

    </Container>
  );
}
