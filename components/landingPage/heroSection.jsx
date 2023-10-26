import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function HeroSection() {
  return (
      <Container>
        <Row className="background-color m-5">
          <Col className="col-centered" md={6}>
            <div>
              <h1 className="custom-line-height mt-3 bold-text">Erfolg in Sozialen</h1>
              <h1 className="bold-text">Medien - Wir machen</h1>
              <h1 className="custom-line-height bold-text">es möglich!</h1>
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
