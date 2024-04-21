import React, { useState, useCallback, useEffect } from 'react';
import { useUsername } from 'pages/app/analytics.js';

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

    const handleSelectAccount = useCallback((username) => {
        onSelectUsername(username);
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
            <CustomDropdownMenu platform={platform} />
        </div>
    );
}

export default CombinedControls;
