import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function HeroSection() {
  return (
      <Container>
        <Row className="background-color m-5">
          <Col className="col-centered" md={6}>
            <div>
              <h2 className="custom-line-height mt-3">Erfolg in Sozialen</h2>
              <h2>Medien - Wir machen</h2>
              <h2 className="custom-line-height">es möglich!</h2>
              <p className="mt-4">
                Strategie, Analyse und Umsetzung:<br/>
                Entdecken Sie, wie unser umfassendes Social Media Management<br />
                Ihre Socialmediapräsenz nach vorne bringt!
              </p>
              <button className="button-hero semi-transparent-text">Register</button>
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
