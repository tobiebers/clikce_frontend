import React, { useState, useEffect, useContext } from 'react';
import { UsernameContext } from 'pages/app/analytics.js';

const CardClient = () => {
    const { username } = useContext(UsernameContext);
    const [profileData, setProfileData] = useState(null); // Initial null statt {}
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!username) {
            console.error('Kein Benutzername angegeben');
            setIsLoading(false);
            return;
        }

        const getUrl = `http://localhost:5000/select-account/${encodeURIComponent(username)}`;
        fetch(getUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Fehler beim Abrufen der Profilinformationen. Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProfileData(data); // Direktes Speichern der Antwort
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Fehler beim Abrufen der Profilinformationen:', error);
                setIsLoading(false);
            });
    }, [username]);

    // Sicherstellen, dass profileData vorhanden und nicht null ist
    const profileInfo = profileData ? profileData.profile_info || {} : {};

    return (
        <article className="card-client">
            {isLoading ? (
                <p>Lade Profilinformationen...</p>
            ) : profileData ? ( // Zusätzliche Überprüfung, ob profileData vorhanden ist
                <>
                    <figure className="user-picture">
                        <img src={'/ProfilePicPlaceholder.jpg'} alt={profileInfo.username || 'Unbekannter Benutzer'} style={{ width: '100%', height: '100%' }}/>
                    </figure>
                    <div className="client-info">
                        <h2 className="name-client">{profileInfo.full_name || 'Unbekannter Nutzer'}</h2>
                        <span className="role">@{profileInfo.username || 'N/A'}</span>
                    </div>
                </>
            ) : (
                <p>Wähle einen Account.</p> // Fallback für den Fall, dass keine Daten geladen werden konnten
            )}
        </article>
    );
};

export default CardClient;
