import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function SocialmediaAccounts() {
  return (
    <Container className="text-center">
      <h1>Verbinde deine Social Media Accounts</h1>
      <p className="semi-transparent-text">Wir unterstützen diese Plattformen</p>
      <Row className="justify-content-center">
        <Col>
          <div className="social-icon mt-3">
            <img src="/instagramLogoIcon.png" alt="Icon 2" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
