import React, { useState, useEffect, useContext } from 'react';
import { UsernameContext } from 'pages/app/analytics.js';

const CardClient = () => {
    const { username } = useContext(UsernameContext);
    const [profileInfo, setProfileInfo] = useState({});
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
                setProfileInfo(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Fehler beim Abrufen der Profilinformationen:', error);
                setIsLoading(false);
            });
    }, [username]); // Reagiert auf Änderungen des Benutzernamens

    return (
        <article className="card-client">
            {isLoading ? (
                <p>Lade Profilinformationen...</p>
            ) : (
                <>
                    <figure className="user-picture">
                        <img src={profileInfo.profile_pic_url || '/PlaceHolder.jpg'} alt={profileInfo.username || 'Unbekannter Benutzer'} />
                    </figure>
                    <div className="client-info">
                        <h2 className="name-client">{profileInfo.full_name || 'Unbekannter Nutzer'}</h2>
                        <span className="role">@{profileInfo.username || 'N/A'}</span>
                    </div>
                </>
            )}
        </article>
    );
};

export default CardClient;
