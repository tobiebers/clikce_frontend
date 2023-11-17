import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function Pricing() {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="text-center">
          <h2>Bereit loszulegen?</h2>
          <p>14 Tage unbegrenzter kostenloser Test. Keine Vertragsanbindung oder Kreditkarte erforderlich.</p>
        </Col>
      </Row>

      <Row className="mt-6">
        <Col>
          <Card style={{ height: '340px'}}>
            <Card.Body className="d-flex flex-column align-items-center">
              <h5 className="fw-bold" style={{ fontSize: '1.5em' }}>FREE USER</h5>
               <div className="col-md-6 d-flex align-items-baseline">
                <h2 className="mb-0 mt-4 text-xl">€0</h2>
                <p className="mb-0 ms-1">/monatlich</p>
              </div>
              <Card.Text className="small-text text-center mt-5">
                Modernisierung der Preisgestaltung für Unternehmenssicherheit  <br /> mit Forcepoint Advantage
              </Card.Text>
              <Button variant="danger" className="mt-2" style={{ backgroundColor: '#008080', color: 'black', borderColor: '#008080' }}>
                Kostenlose Testversion
              </Button>
              <Card.Text className="small-text mt-2">
                <u>Erfahre mehr</u>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: '340px' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <h5 className="fw-bold" style={{ fontSize: '1.5em' }}>INFLUENCER</h5>
               <div className="col-md-6 d-flex align-items-baseline">
                <h2 className="mb-0 mt-4 text-xl">€20</h2>
                <p className="mb-0 ms-1">/monatlich</p>
              </div>
              <Card.Text className="small-text text-center mt-5">
                Modernisierung der Preisgestaltung für Unternehmenssicherheit <br /> mit Forcepoint Advantage
              </Card.Text>
              <Button variant="danger" className="mt-2" style={{ backgroundColor: '#008080', color: 'black', borderColor: '#008080' }}>
               Kostenlose Testversion
              </Button>
              <Card.Text className="small-text mt-2">
                <u>Erfahre mehr</u>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: '340px' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <h5 className="fw-bold" style={{ fontSize: '1.5em' }}>MANAGER</h5>
               <div className="col-md-6 d-flex align-items-baseline">
                <h2 className="mb-0 mt-4 text-xl">€40</h2>
                <p className="mb-0 ms-1">/monatlich</p>
              </div>
              <Card.Text className="small-text text-center mt-5">
                Modernisierung der Preisgestaltung für Unternehmenssicherheit <br /> mit Forcepoint Advantage
              </Card.Text>
              <Button variant="danger" className="mt-2" style={{ backgroundColor: '#008080', color: 'black', borderColor: '#008080' }}>
                Kostenlose Testversion
              </Button>
              <Card.Text className="small-text mt-2">
                <u>Erfahre mehr</u>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: '340px' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <h5 className="fw-bold" style={{ fontSize: '1.5em' }}>E COMMERCE</h5>
              <div className="col-md-6 d-flex align-items-baseline">
                <h2 className="mb-0 mt-4 text-xl">€60</h2>
                <p className="mb-0 ms-1">/monatlich</p>
              </div>
              <Card.Text className="small-text text-center mt-5">
                Modernisierung der Preisgestaltung für Unternehmenssicherheit <br /> mit Forcepoint Advantage
              </Card.Text>
              <Button variant="danger" className="mt-2" style={{ backgroundColor: '#008080', color: 'black', borderColor: '#008080' }}>
                Kostenlose Testversion
              </Button>
              <Card.Text className="small-text mt-2">
                <u>Erfahre mehr</u>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
