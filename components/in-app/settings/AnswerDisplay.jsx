import React, { useEffect, useState } from 'react';

const AnswersDisplay = () => {
    const [answers, setAnswers] = useState({ 0: '', 1: '', 2: '' });
    const [editingAnswers, setEditingAnswers] = useState({ 0: '', 1: '', 2: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnswers = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:5000/fetch-answers');
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok');
                }
                const data = await response.json();
                if (data.length > 0) {
                    setAnswers(data[0]);
                    setEditingAnswers(data[0]);
                }
            } catch (error) {
                console.error('Fehler beim Abrufen der Antworten:', error);
            }
            setLoading(false);
        };

        fetchAnswers();
    }, []);

    const handleEditChange = (key, value) => {
        setEditingAnswers({ ...editingAnswers, [key]: value });
    };

    const handleSave = async (key) => {
    const updatedAnswer = { key: key, answer: editingAnswers[key] };
    try {
        const response = await fetch('http://localhost:5000/change-answers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedAnswer),
        });
        if (response.ok) {
            setAnswers({ ...answers, [key]: editingAnswers[key] });
        } else {
            console.error('Fehler beim Aktualisieren der Antwort');
        }
    } catch (error) {
        console.error('Fehler:', error);
    }
};


    return (
    <div className="container mt-5">
      <h1>Antworten</h1>
      {loading ? (
        <p>Laden...</p>
      ) : (
        <div>
          {Object.keys(answers).map(key => (
            <div key={key} className="mb-3">
              <label htmlFor={`answer-${key}`} className="form-label">
                Frage {key}:
              </label>
              <input
                type="text"
                className="form-control"
                id={`answer-${key}`}
                value={editingAnswers[key]}
                onChange={(e) => handleEditChange(key, e.target.value)}
              />
              <button onClick={() => handleSave(key)} className="btn btn-success mt-2">
                ✔️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default AnswersDisplay;
