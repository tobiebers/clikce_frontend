import React, { useState } from 'react';

function ToggleSwitch() {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => setIsChecked(!isChecked);

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
                <div>Account</div>
                <div>Group</div>
            </label>
        </div>
    );
}

function CustomDropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="custom-dropdown-wrapper">
            <nav className="custom-dropdown-nav">
                <span className="custom-dropdown-toggle" onClick={toggleDropdown}>Accounts</span>
                {isOpen && (
                    <ul className="custom-dropdown-slide">
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                )}
            </nav>
        </div>
    );
}

export default function CombinedControls() {
    return (
        <div className="controls-container">
            <ToggleSwitch />
            <CustomDropdownMenu />
        </div>
    );
}
