import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

export default function CardsInfo() {
  const [likesText, setLikesText] = useState("");
  const [followerText, setFollowerText] = useState("");
  const [kommentarText, setKommentarText] = useState("");
  const [followingText, setFollowingText] = useState("");

  useEffect(() => {
    const fetchSection1Text = async () => {
      try {
        const response = await fetch('http://localhost:5000/fetch-card-info');
        const data = await response.json();
        setLikesText(data.likesText);
        setFollowerText(data.followerText);
        setKommentarText(data.kommentarText);
        setFollowingText(data.followingText);
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten vom Backend:', error);
      }
    };

    fetchSection1Text();
  }, []);

  const handleRefreshClick = async () => {
  try {
    // Senden einer Anfrage an den Flask-Server
    const response = await fetch('http://localhost:5000/fetch-refresh-data', {
      method: 'GET', // Oder 'POST', je nachdem, wie Ihre Flask-Route konfiguriert ist
    });

    if (!response.ok) {
      throw new Error('Netzwerkantwort war nicht ok');
    }

    // Hier können Sie zusätzliche Aktionen durchführen, wenn die Anfrage erfolgreich war
    console.log('Daten erfolgreich aktualisiert');

  } catch (error) {
    console.error('Fehler beim Aktualisieren der Daten:', error);
  }
};


  return (
    <Container>
      <Row>
        {/* Abschnitt 1 */}
        <Col>
          <Card className="background-color-secondary">
            <Row>
              <Col md={3}>
                <Card.Img src="/Cards-Info-Herz.png" alt="Bild 3" className="card-img-centered img-responsive my-1 mx-1"/>
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Text>{likesText}</Card.Text>
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
              <Col md={3}>
                <Card.Img src="/Cards-Info-Follower.png" alt="Bild 2" className="card-img-centered my-1 mx-1"/>
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Text>{followerText}</Card.Text>
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
              <Col md={3}>
                <Card.Img src="/Cards-Info-Leads.png" alt="Bild 3" className="card-img-centered mx-1 my-1"/>
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Text>{kommentarText}</Card.Text>
                  <Card.Text>Kommentare</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Abschnitt 4 */}
        <Col>
          <Card className="background-color-secondary">
            <Row>
              <Col md={3}>
                <Card.Img src="/Cards-Info-Referrals.png" alt="Bild 4" className="card-img-centered mx-1 my-1"/>
              </Col>
              <Col md={9}>
                <Card.Body>
                  <Card.Text>{followingText}</Card.Text>
                  <Card.Text>Following</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Abschnitt 5: Karte mit Dropdown-Menü */}
        <Col>
          <Card className="h-100 background-color-secondary">
            <Card.Body>
               <Button className="btn1" onClick={handleRefreshClick}>Refresh</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
