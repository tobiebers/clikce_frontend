import React, { useState } from 'react';

function ToggleLists() {
    // Zustand, der bestimmt, welche Liste angezeigt wird
    const [isListOneVisible, setIsListOneVisible] = useState(true);

    // Die Listen
    const listOne = ["Geplanter Post am: 22.22.22", "Geplanter Post am: 22.22.23", "Geplanter Post am: 22.22.24"];
    const listTwo = ["Bot-Log 1", "Bot-Log 2", "Bot-Log 3"];

    return (
        <div className="tabs-container">
            <div className="tabs">
                <button
                    onClick={() => setIsListOneVisible(true)}
                    className={isListOneVisible ? 'tab active' : 'tab'}
                >
                    Posts
                </button>
                <button
                    onClick={() => setIsListOneVisible(false)}
                    className={!isListOneVisible ? 'tab active' : 'tab'}
                >
                    Bot-Logs
                </button>
            </div>
            <div className="content">
                {isListOneVisible ? (
                    <ul>
                        {listOne.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <ul>
                        {listTwo.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default ToggleLists;

