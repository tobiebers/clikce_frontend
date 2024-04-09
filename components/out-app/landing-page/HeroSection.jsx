import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {useRouter} from "next/router";


export default function HeroSection() {
  const router = useRouter();
  const handleNavigation = (path) => {
  router.push(path);
};
  return (
      <Container>
        <Row className="background-color-heroSection m-2 mt-5">
          <Col className="col-centered" md={6}>
            <div>
              <h1 className="custom-line-height mt-3 fw-bold">Erfolg in Sozialen</h1>
              <h1 className="fw-bold">Medien - Wir machen</h1>
              <h1 className="custom-line-height fw-bold mb-3">es möglich!</h1>
              <p className="mt-5 text-m">
                Strategie, Analyse und Umsetzung:<br/>
                Entdecken Sie, wie unser umfassendes Social Media Management<br />
                Ihre Socialmediapräsenz nach vorne bringt!
              </p>
              <button className="btn2 button-small" onClick={() => handleNavigation('/register')}>
                Register
              </button>
            </div>
          </Col>
          <Col className="col-centered text-end" md={6}>
            <div>
              <img className="img-size-hero" src="/heroSection.png"/>
            </div>
          </Col>
        </Row>
      </Container>
  );
}
