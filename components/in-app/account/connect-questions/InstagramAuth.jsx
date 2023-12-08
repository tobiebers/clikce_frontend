import React, { useState, useEffect } from 'react';

const InstagramAuth = () => {
    const [username, setUsername] = useState(''); // Zustand für den Benutzernamen

    // Funktion zum Verbinden mit Instagram
    const connectInstagram = async () => {
        try {
            const response = await fetch('http://localhost:5000/connect-instagram');
            if (response.ok) {
                const data = await response.json();
                window.location.href = data.authUrl; // Umleitung zur Instagram-Authentifizierungsseite
            } else {
                console.error('Fehler beim Verbinden mit Instagram');
            }
        } catch (error) {
            console.error('Fehler:', error);
        }
    };

    // Funktion zum Senden des Authentifizierungscodes an das Backend
    const sendCodeToBackend = async (code) => {
        try {
            const response = await fetch('http://localhost:5000/convert-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: code }),
            });
            if (!response.ok) {
                console.error('Fehler beim Senden des Codes');
            }
        } catch (error) {
            console.error('Fehler:', error);
        }
    };

    // Funktion zum Abrufen des Benutzernamens
    const fetchUsername = async () => {
        try {
            const response = await fetch('http://localhost:5000/instagram-profile-name');
            if (response.ok) {
                const data = await response.json();
                setUsername(data.username); // Setzen des Benutzernamens
            } else {
                console.error('Fehler beim Abrufen des Benutzernamens');
            }
        } catch (error) {
            console.error('Fehler:', error);
        }
    };

    // useEffect-Hook wird aufgerufen, sobald der Benutzer zurückgeleitet wird
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            sendCodeToBackend(code);
            fetchUsername(); // Benutzernamen abrufen
        }
    }, []);

    return (
        <div>
            <button onClick={connectInstagram}>Verbinden mit Instagram</button>
            <p>Benutzername: {username}</p> {/* Anzeigen des Benutzernamens */}
        </div>
    );
};

export default InstagramAuth;
