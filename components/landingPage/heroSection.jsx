import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function HeroSection() {
  return (
    <div className="heroSectionbackground">
      <Container>
        <Row>
          <Col md={6}>
            <div className="content">
              <h2 className="custom-h2">Erfolg in Sozialen</h2>
              <h2 className="custom-h2">Medien - Wir machen</h2>
              <h2 className="custom-h2">es möglich!</h2>
              <p className="custom-h2">
                Strategie, Analyse und Umsetzung:<br />
                Entdecken Sie, wie unser umfassendes Social Media Management<br />
                Ihre Socialmediapräsenz nach vorne bringt!
              </p>
              <button className="button1">Register</button>
            </div>
          </Col>
          <Col md={6}>
            <div className="imageContainer">
              <img src="/heroSection.png" width="270" height="270" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
