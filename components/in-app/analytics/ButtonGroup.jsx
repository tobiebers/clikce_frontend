import React, { useState, useCallback, useEffect } from 'react';
import { useUsername } from 'pages/app/analytics.js';

function ToggleSwitch({ onToggle }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = useCallback(() => {
        setIsChecked(false);
        onToggle('instagram');
    }, [onToggle]);

    return (
        <div className="toggle-switch-wrapper">
            <input
                type="checkbox"
                id="toggle-switch"
                className="toggle-switch-checkbox"
                checked={isChecked}
                onChange={handleToggle}
                disabled={true}
            />
            <label htmlFor="toggle-switch" className="toggle-switch-container">
                <div>Instagram</div>
                {/* Füge eine Klasse hinzu, um TikTok optisch zu deaktivieren */}
                <div className="disabled-option">TikTok</div>
            </label>
        </div>
    );
}

function CustomDropdownMenu({ platform }) {
    const [accounts, setAccounts] = useState([]);
    const { onSelectUsername } = useUsername(); // Verwendung des Contexts

    useEffect(() => {
        const url = `http://localhost:5000/${platform}-profiles`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAccounts(data.accounts);
            })
            .catch(error => console.error('Error:', error));
    }, [platform]);

    // Diese Funktion wird aufgerufen, wenn ein Account ausgewählt wird
    const handleSelectAccount = useCallback((username) => {
        // Setzt den ausgewählten Benutzernamen im Kontext
        onSelectUsername(username);

        // Sendet eine POST-Anfrage, um die Profilinformationen des Benutzers zu speichern
        fetch(`http://localhost:5000/save-instagram-profile-data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        })
        .then(response => {
            if (response.ok) {
                console.log(`Profilinformationen für ${username} gespeichert.`);
            } else {
                console.error('Fehler beim Speichern der Profilinformationen');
            }
        })
        .catch(error => {
            console.error('Fehler:', error);
        });
    }, [onSelectUsername]);

    return (
        <div className="custom-dropdown-wrapper">
            <div className="custom-dropdown-nav">
                <span className="custom-dropdown-toggle">Accounts</span>
                <ul className="custom-dropdown-slide">
                    {accounts.map((account, index) => (
                        <li key={index} onClick={() => handleSelectAccount(account.username)}>{account.username}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function CombinedControls() {
    const [platform, setPlatform] = useState('instagram');

    return (
        <div className="controls-container">
            <ToggleSwitch onToggle={setPlatform} />
            <CustomDropdownMenu platform={platform} />
        </div>
    );
}

export default CombinedControls;
