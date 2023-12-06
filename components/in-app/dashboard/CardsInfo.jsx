import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function CardsInfo() {
  const [section1Text, setSection1Text] = useState("");
  const [section2Text, setSection2Text] = useState("");
  const [section3Text, setSection3Text] = useState("");
  const [section4Text, setSection4Text] = useState("");

  useEffect(() => {
    const fetchSection1Text = async () => {
      try {
        const response = await fetch('http://localhost:5000/fetch-card-info');
        const data = await response.json();
        setSection1Text(data.section1Text);
        setSection2Text(data.section2Text);
        setSection3Text(data.section3Text);
        setSection4Text(data.section4Text);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten vom Backend:', error);
      }
    };

    fetchSection1Text();
  }, []);

  return (
    <Container>
      <Row>
        {/* Abschnitt 1 */}
        <Col>
          <Card className="background-color-secondary">
            <Row>
              <Col md={4}>
                <Card.Img src="/Cards-Info-Herz.png" alt="Bild 3" className="card-img-centered img-responsive my-1 mx-1"/>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>{section1Text}</Card.Text>
                  <Card.Text>Likes</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Abschnitt 2 */}
        <Col>
          <Card className="background-color-secondary">
            <Row>
              <Col md={4}>
                <Card.Img src="/Cards-Info-Follower.png" alt="Bild 2" className="card-img-centered my-1 mx-1"/>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>{section2Text}</Card.Text>
                  <Card.Text>Follower</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Abschnitt 3 */}
        <Col>
          <Card className="background-color-secondary">
            <Row>
              <Col md={4}>
                <Card.Img src="/Cards-Info-Leads.png" alt="Bild 3" className="card-img-centered mx-1 my-1"/>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>{section3Text}</Card.Text>
                  <Card.Text>New Leads</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Abschnitt 4 */}
        <Col>
          <Card className="background-color-secondary">
            <Row>
              <Col md={4}>
                <Card.Img src="/Cards-Info-Referrals.png" alt="Bild 4" className="card-img-centered mx-1 my-1"/>
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Text>{section4Text}</Card.Text>
                  <Card.Text>Referrals</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
