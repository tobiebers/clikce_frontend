import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

export default function AccountCard() {
  const [accountData, setAccountData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/instagram-profile-data')
      .then(response => response.json())
      .then(data => {
        setAccountData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Fehler beim Abrufen der Instagram-Daten:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Spinner animation="border" role="status"><span className="visually-hidden">Laden...</span></Spinner>;
  }

  if (!accountData) {
    return <div>Keine Daten gefunden.</div>;
  }

  return (
    <Card style={{ width: '18rem', marginTop: '10px' }}>
      <Card.Body>
        <Card.Title>{accountData.type}</Card.Title>
        <Card.Text>
          Benutzername: {accountData.username}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
