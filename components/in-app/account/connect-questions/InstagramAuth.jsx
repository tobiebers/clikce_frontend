import React, { useState } from 'react';

const InstagramAuth = () => {
    const [profileImageUrl, setProfileImageUrl] = useState(null);

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

    const fetchProfileImage = async () => {
        try {
            const response = await fetch('http://localhost:5000/instagram-profile');
            if (response.ok) {
                const data = await response.json();
                setProfileImageUrl(data.profile.picture); // Hier setzen Sie den Pfad zum Profilbild
            } else {
                console.error('Fehler beim Abrufen des Instagram-Profils');
            }
        } catch (error) {
            console.error('Fehler:', error);
        }
    };

    return (
        <div>
            <button onClick={connectInstagram}>Verbinden mit Instagram</button>
            {profileImageUrl && <img src={profileImageUrl} alt="Instagram Profilbild" />}
        </div>
    );
};

export default InstagramAuth;
