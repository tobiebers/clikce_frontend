import React, { useState, useEffect } from 'react';

function ToggleSwitch({ onToggle }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        if (onToggle) {
            onToggle(!isChecked ? 'tiktok' : 'instagram');
        }
    };

    return (
        <div className="toggle-switch-wrapper">
            <input
                type="checkbox"
                id="toggle-switch"
                className="toggle-switch-checkbox"
                checked={isChecked}
                onChange={handleToggle}
            />
            <label htmlFor="toggle-switch" className='toggle-switch-container'>
                <div>Instagram</div>
                <div>TikTok</div>
            </label>
        </div>
    );
}

function CustomDropdownMenu({ platform }) {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        const url = platform === 'instagram'
            ? `http://localhost:5000/instagram-profiles`
            : `http://localhost:5000/tiktok-profiles`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setAccounts(data.accounts);
            })
            .catch(error => console.error('Error:', error));
    }, [platform]);

    const handleSelectAccount = (account) => {
        onSelectAccount(account);
    };

    return (
        <div className="custom-dropdown-wrapper">
            <div className="custom-dropdown-nav">
                <span className="custom-dropdown-toggle">Accounts</span>
                <ul className="custom-dropdown-slide">
                    {accounts.slice(0, 3).map((account, index) => (
                        <li key={index} onClick={() => handleSelectAccount(account)}><a href="#">{account.username}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function CombinedControls() {
    const [platform, setPlatform] = useState('instagram');
    const [selectedAccount, setSelectedAccount] = useState(null);

    // Funktion, die aufgerufen wird, wenn ein Account ausgewählt wird
    const handleSelectAccount = (account) => {
        // Hier würde man normalerweise einen API-Aufruf machen, um die Account-Daten zu holen
        setSelectedAccount(account);
    };

    return (
        <div className="controls-container">
            <ToggleSwitch onToggle={setPlatform} />
            <CustomDropdownMenu platform={platform} onSelectAccount={handleSelectAccount} />
            {selectedAccount && <CardClient account={selectedAccount} />}
        </div>
    );
}

