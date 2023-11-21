import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function HeroSection() {
  return (
      <Container>
        <Row className="background-color-white m-2 rounded-45">
          <Col className="col-centered" md={6}>
            <div>
              <h2 className="custom-line-height mt-5">Melde dich jetzt an!</h2>
              <p className="mt-5 text-m">
                Entdecken Sie jetzt, wie unser umfassendes Social Media<br/>
                Management Ihre<br />
                Ihre Socialmediapräsenz nach vorne bringt!
              </p>
              <button className="btn4 button-small">Register</button>
            </div>
          </Col>
          <Col className="col-centered text-end" md={6}>
            <div className="pr-3">
              <img className="img-size-aufordrungAnmelden"  src="/Login-pana.png"/>
            </div>
          </Col>
        </Row>
      </Container>
  );
}