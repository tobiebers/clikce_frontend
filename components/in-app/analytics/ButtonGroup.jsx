import React, { useState, useEffect } from 'react';

function ToggleSwitch({ onToggle }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        if (onToggle) {
            onToggle();
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
    const toggleDropdown = () => setIsOpen(!isOpen);

    useEffect(() => {
    const url = platform === 'instagram'
        ? `http://localhost:5000/instagram-profiles`
        : `http://localhost:5000/tiktok-profiles`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("Abgerufene Daten:", data); // Ausgabe in der Konsole
            setAccounts(data.accounts);
        })
        .catch(error => console.error('Error:', error));
}, [platform]);



    return (
        <div className="custom-dropdown-wrapper">
            <nav className="custom-dropdown-nav">
                <span className="custom-dropdown-toggle" onClick={toggleDropdown}>Accounts</span>
                {isOpen && (
                    <ul className="custom-dropdown-slide">
                        {accounts.map((account, index) => (
                            <li key={index}><a href="#">{account.username}</a></li>
                        ))}
                    </ul>
                )}
            </nav>
        </div>
    );
}

export default function CombinedControls() {
    const [platform, setPlatform] = useState('instagram');

    return (
        <div className="controls-container">
            <ToggleSwitch onToggle={() => setPlatform(platform === 'instagram' ? 'tiktok' : 'instagram')} />
            <CustomDropdownMenu platform={platform} />
        </div>
    );
}