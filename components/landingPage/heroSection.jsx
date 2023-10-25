import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function HeroSection() {
  return (
      <Container>
        <Row>
          <Col className="col-centered heroSectionbackground" md={6}>
            <div>
              <h2>Erfolg in Sozialen</h2>
              <h2>Medien - Wir machen</h2>
              <h2>es möglich!</h2>
              <p>
                Strategie, Analyse und Umsetzung:<br />
                Entdecken Sie, wie unser umfassendes Social Media Management<br />
                Ihre Socialmediapräsenz nach vorne bringt!
              </p>
              <button>Register</button>
            </div>
          </Col>
          <Col className="col-centered" md={6}>
            <div>
              <img src="/heroSection.png" width="270" height="270" />
            </div>
          </Col>
        </Row>
      </Container>
  );
}
