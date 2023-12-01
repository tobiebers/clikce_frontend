import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';


const Questionnaire = () => {
  const router = useRouter();

  const questions = {
    0: "Guten Tag, wie dürfen wir Sie nennen?",
    1: "Welche Hobbys hast du?",
    2: "Was ist deine Lieblingsfarbe?"
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showCompletionScreen, setShowCompletionScreen] = useState(false);

  const handleNextOrSkip = () => {
    const isLastQuestion = currentQuestionIndex === Object.keys(questions).length - 1;
    if (isLastQuestion) {
      setShowCompletionScreen(true); // Zeige den Bildschirm für "Fertig stellen" an
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleInputChange = (e) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/submit-answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answers),
      });

      if (response.ok) {
        // Speichern im LocalStorage, dass der Fragebogen abgeschlossen wurde
        sessionStorage.setItem('questionnaireCompleted', 'true');

        // Navigieren zur /app/dashboard Seite, wenn die Antwort erfolgreich ist
        router.push('/app/dashboard');
      } else {
        console.error('Fehler beim Senden der Antworten');
      }
    } catch (error) {
      console.error('Fehler:', error);
    }
  };


  return (
      <div className="questionnaire-container" key={currentQuestionIndex}>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Achtung</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bitte beantworten Sie die Frage.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>OK</Button>
          </Modal.Footer>
        </Modal>

        {showCompletionScreen ? (
            <div>
              <p>Bereit zum Starten?</p>
              <Button variant="success" onClick={handleSubmit}>Fertig stellen</Button>
            </div>
        ) : (
            <div className="vw-100">
              <p>{questions[currentQuestionIndex]}</p>
              <input className="input-field" type="text" value={answers[currentQuestionIndex] || ''}
                     onChange={handleInputChange}/>
              <div className="button-group-wrapper">
                <div className="button-group">
                  <Button variant="secondary" onClick={handleNextOrSkip}>Überspringen</Button>
                  <Button variant="primary" onClick={handleNextOrSkip}>Nächste</Button>
                </div>
              </div>
            </div>
        )}
      </div>
  );
}

export default Questionnaire;