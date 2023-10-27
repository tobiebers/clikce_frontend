import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function HeroSection() {
  return (
      <Container>
        <Row className="background-color m-2">
          <Col className="col-centered" md={6}>
            <div>
              <h1 className="custom-line-height mt-3 fw-bold">Erfolg in Sozialen</h1>
              <h1 className="fw-bold">Medien - Wir machen</h1>
              <h1 className="custom-line-height fw-bold">es möglich!</h1>
              <p className="mt-4 text-m">
                Strategie, Analyse und Umsetzung:<br/>
                Entdecken Sie, wie unser umfassendes Social Media Management<br />
                Ihre Socialmediapräsenz nach vorne bringt!
              </p>
              <button className="btn2 button-small">Register</button>
            </div>
          </Col>
          <Col className="col-centered" md={6}>
            <div>
              <img src="/heroSection.png" width="250" height="250" />
            </div>
          </Col>
        </Row>
      </Container>
  );
}
