import React, { useState, useEffect } from 'react';

function ToggleSwitch({ onToggle }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        if (onToggle) {
            onToggle(isChecked ? 'tiktok' : 'instagram');
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
    const [isOpen, setIsOpen] = useState(false);
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        // Platzhalter-URLs, ersetzen Sie diese durch Ihre tatsächlichen Endpunkte
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

    return (
        <div className="custom-dropdown-wrapper">
            <div className="custom-dropdown-nav">
                <button className="custom-dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                    Accounts
                </button>
                {isOpen && (
                    <ul className="custom-dropdown-slide">
                        {accounts.map((account, index) => (
                            <li key={index}><a href="#">{account.username}</a></li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default function CombinedControls() {
    const [platform, setPlatform] = useState('instagram');

    return (
        <div className="controls-container">
            <ToggleSwitch onToggle={setPlatform} />
            <CustomDropdownMenu platform={platform} />
        </div>
    );
}
