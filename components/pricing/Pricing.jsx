import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function Pricing() {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="text-center">
          <h2>Bereit zum loszulegen? Erkunden Sie Ihre Chancen bei uns</h2>
          <p>Sichern Sie sich unseren 14-tägigen unbegrenzten kostenlosen Test. Eine gültige Kreditkarte und Vertragsbindung sind erforderlich.</p>
        </Col>
      </Row>

      <Row className="mt-6">
        <Col>
          <Card style={{ height: '340px'}}>
            <Card.Body className="d-flex flex-column align-items-center">
              <h5 className="fw-bold" style={{ fontSize: '1.5em' }}>FREE USER</h5>
               <div className="col-md-5 d-flex align-items-baseline">
                <h2 className="mb-0 mt-4 text-xl">€0</h2>
                <p className="mb-0 ms-1 text-s">/mo</p>
              </div>
              <Card.Text className="text-xs text-center mt-5">
                Nutzen Sie die grundlegenden Funktionen unseres Services völlig kostenlos. Perfekt für Einsteiger und kleine Projekte.
              </Card.Text>
              <Button variant="danger" className="mt-2" style={{ backgroundColor: '#008080', color: 'black', borderColor: '#008080' }}>
                Kostenlose Testversion
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: '340px' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <h5 className="fw-bold" style={{ fontSize: '1.5em' }}>INFLUENCER</h5>
               <div className="col-md-6 d-flex align-items-baseline">
                <h2 className="mb-0 mt-4 text-xl">€20</h2>
                <p className="mb-0 ms-1 text-s">/mo</p>
              </div>
              <Card.Text className="text-xs text-center mt-5">
                 Steigern Sie Ihre Reichweite mit erweiterten Funktionen. Ideal für Influencer und wachsende Online-Präsenzen.
              </Card.Text>
              <Button variant="danger" className="mt-2" style={{ backgroundColor: '#008080', color: 'black', borderColor: '#008080' }}>
               Kostenlose Testversion
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: '340px' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <h5 className="fw-bold" style={{ fontSize: '1.5em' }}>MANAGER</h5>
               <div className="col-md-6 d-flex align-items-baseline">
                <h2 className="mb-0 mt-4 text-xl">€40</h2>
                <p className="mb-0 ms-1 text-s">/mo</p>
              </div>
              <Card.Text className="text-xs text-center mt-5">
                Optimieren Sie Ihr Management mit erweiterten Tools. Perfekt für Manager und Teams, die effizient arbeiten möchten.
              </Card.Text>
              <Button variant="danger" className="mt-2" style={{ backgroundColor: '#008080', color: 'black', borderColor: '#008080' }}>
                Kostenlose Testversion
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: '340px' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <h5 className="fw-bold" style={{ fontSize: '1.5em' }}>E COMMERCE</h5>
              <div className="col-md-6 d-flex align-items-baseline">
                <h2 className="mb-0 mt-4 text-xl">€60</h2>
                <p className="mb-0 ms-1 text-s">/mo</p>
              </div>
              <Card.Text className="text-xs text-center mt-5">
                Steigern Sie Ihren Online-Shop mit leistungsstarken E-Commerce-Funktionen. Ideal für wachsende Online-Geschäfte.
              </Card.Text>
              <Button variant="danger" className="mt-2" style={{ backgroundColor: '#008080', color: 'black', borderColor: '#008080' }}>
                Kostenlose Testversion
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
