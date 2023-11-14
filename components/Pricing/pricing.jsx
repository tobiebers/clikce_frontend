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

      <Row className="mt-7">
        <Col>
          <Card style={{ height: '340px'}}>
            <Card.Body className="d-flex flex-column align-items-center">
              <p>PROTECTED DATA</p>
              <h5 className="mt-6 font-weight-bold" style={{ fontSize: '1.5em' }}>FREE USER</h5>
              <h6 className="mt-4">€0/month</h6>
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
              <p>PROTECTED DATA</p>
              <h5 className="mt-6 font-weight-bold" style={{ fontSize: '1.5em' }}>INFLUENCER</h5>
              <h6 className="mt-4">€20/month</h6>
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
              <p>PROTECTED DATA</p>
              <h5 className="mt-6 font-weight-bold" style={{ fontSize: '1.5em' }}>MANAGER</h5>
              <h6 className="mt-4">€40/month</h6>
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
              <p>PROTECTED DATA</p>
              <h5 className="mt-6 font-weight-bold" style={{ fontSize: '1.5em' }}>E COMMERCE</h5>
              <h6 className="mt-4">€60/month</h6>
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
