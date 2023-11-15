import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

export default function Pricing() {
  return (
    <Container>
      <Row className="mt-5">
        <Col className="text-center">
          <h2>Ready to get started?</h2>
          <p>14 days unlimited free trial. No contract or credit card required.</p>
        </Col>
      </Row>

      <Row className="mt-6">
        <Col>
          <Card style={{ height: '340px'}}>
            <Card.Body className="d-flex flex-column align-items-center">
              <h5 className="fw-bold" style={{ fontSize: '1.5em' }}>FREE USER</h5>
               <div className="col-md-6 d-flex align-items-baseline">
                <h2 className="mb-0 mt-5 text-xl">€0</h2>
                <p className="mb-0 ms-2">/month</p>
              </div>
              <Card.Text className="small-text text-center mt-5">
                Modernizing Enterprise Security Pricing <br /> with Forcepoint Advantage
              </Card.Text>
              <Button variant="danger" className="mt-2" style={{ backgroundColor: '#008080', color: 'black', borderColor: '#008080' }}>
                Start Free Trial
              </Button>
              <Card.Text className="small-text mt-2">
                <u>Learn more</u>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: '340px' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <h5 className="fw-bold" style={{ fontSize: '1.5em' }}>INFLUENCER</h5>
               <div className="col-md-6 d-flex align-items-baseline">
                <h2 className="mb-0 mt-5 text-xl">€20</h2>
                <p className="mb-0 ms-2">/month</p>
              </div>
              <Card.Text className="small-text text-center mt-5">
                Modernizing Enterprise Security Pricing <br /> with Forcepoint Advantage
              </Card.Text>
              <Button variant="danger" className="mt-2" style={{ backgroundColor: '#008080', color: 'black', borderColor: '#008080' }}>
                Start Free Trial
              </Button>
              <Card.Text className="small-text mt-2">
                <u>Learn more</u>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: '340px' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <h5 className="fw-bold" style={{ fontSize: '1.5em' }}>MANAGER</h5>
               <div className="col-md-6 d-flex align-items-baseline">
                <h2 className="mb-0 mt-5 text-xl">€40</h2>
                <p className="mb-0 ms-2">/month</p>
              </div>
              <Card.Text className="small-text text-center mt-5">
                Modernizing Enterprise Security Pricing <br /> with Forcepoint Advantage
              </Card.Text>
              <Button variant="danger" className="mt-2" style={{ backgroundColor: '#008080', color: 'black', borderColor: '#008080' }}>
                Start Free Trial
              </Button>
              <Card.Text className="small-text mt-2">
                <u>Learn more</u>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ height: '340px' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <h5 className="fw-bold" style={{ fontSize: '1.5em' }}>E COMMERCE</h5>
              <div className="col-md-6 d-flex align-items-baseline">
                <h2 className="mb-0 mt-5 text-xl">€60</h2>
                <p className="mb-0 ms-2">/month</p>
              </div>
              <Card.Text className="small-text text-center mt-5">
                Modernizing Enterprise Security Pricing <br /> with Forcepoint Advantage
              </Card.Text>
              <Button variant="danger" className="mt-2" style={{ backgroundColor: '#008080', color: 'black', borderColor: '#008080' }}>
                Start Free Trial
              </Button>
              <Card.Text className="small-text mt-2">
                <u>Learn more</u>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
