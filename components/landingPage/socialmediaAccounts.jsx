import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function SocialmediaAccounts() {
  return (
    <Container className="text-center">
      <h1>Verbinde deine Social Media Accounts</h1>
      <p>Wir unterstützen diese Plattformen</p>
      <Row className="justify-content-center">
        <Col>
          <div className="social-icon">
            <img src="/facebookLogoIcon.png" alt="Icon 1" />
          </div>
        </Col>
        <Col>
          <div className="social-icon">
            <img src="/instagramLogoIcon.png" alt="Icon 2" />
          </div>
        </Col>
        <Col>
          <div className="social-icon">
            <img src="/whatsappLogoIcon.png" alt="Icon 3" />
          </div>
        </Col>
        <Col>
          <div className="social-icon">
            <img src="/tiktokLogoIcon.png" alt="Icon 4" />
          </div>
        </Col>
        <Col>
          <div className="social-icon">
            <img src="/youtubeLogoIcon.png" alt="Icon 5" />
          </div>
        </Col>
      </Row>
      <Button variant="primary">Erfahre mehr</Button>
    </Container>
  );
}
