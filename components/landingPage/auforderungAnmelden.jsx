import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function HeroSection() {
  return (
      <Container>
        <Row className="background-color-white m-2 rounded-45">
          <Col className="col-centered" md={6}>
            <div>
              <h2 className="custom-line-height mt-4">Melde dich jetzt an!</h2>
              <p className="mt-4 text-m">
                Entdecken Sie jetzt, wie unser umfassendes Social Media<br/>
                Management Ihre<br />
                Ihre Socialmediapräsenz nach vorne bringt!
              </p>
              <button className="btn4 button-small">Register</button>
            </div>
          </Col>
          <Col className="col-centered" md={6}>
            <div>
              <img src="/Login-pana.png" width="250" height="250" />
            </div>
          </Col>
        </Row>
      </Container>
  );
}