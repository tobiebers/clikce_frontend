import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import CompletionScreen from "@/components/out-app/personal-info/CompletionScreen";

const Questionnaire = () => {
  const router = useRouter();

  const questions = {
    0: "Guten Tag, wie dürfen wir Sie nennen?",
    1: "In welcher Branche arbeitest du?",
    2: "In welcher Sprache möchtest du deine Beiträge?",
    3: "Worauf legst du deinen Hauptfokus deiner Beiträge?",
    4: "Gib uns bitte ein paar Infos über dein Unternehmen?"
  };

  // Sprachoptionen und Fokusoptionen
  const languageOptions = ["Deutsch", "Englisch", "Spanisch"];
  const focusOptions = ["Technologie", "Marketing", "Finanzen", "Kunst"];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showCompletionScreen, setShowCompletionScreen] = useState(false);
  const [showIntroScreen, setShowIntroScreen] = useState(true);


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
        router.push('/app/connectAccounts');
      } else {
        console.error('Fehler beim Senden der Antworten');
      }
    } catch (error) {
      console.error('Fehler:', error);
    }
  };

  const renderInputField = () => {
    if (currentQuestionIndex === 2) {
      return (
        <select
          className="custom-select"
          value={answers[currentQuestionIndex] || ''}
          onChange={handleInputChange}
        >
          <option value="">Bitte auswählen</option>
          {languageOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      );
    } else if (currentQuestionIndex === 3) {
      return (
        <select
          className="custom-select"
          value={answers[currentQuestionIndex] || ''}
          onChange={handleInputChange}
        >
          <option value="">Bitte auswählen</option>
          {focusOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      );
    } else {
      return (
        <input
          className="input-field"
          type="text"
          value={answers[currentQuestionIndex] || ''}
          onChange={handleInputChange}
        />
      );
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
        <Button onClick={() => setShowModal(false)}>OK</Button>
      </Modal.Footer>
    </Modal>

    {showIntroScreen ? (
      <div className="intro-screen">
        <p>Nur noch ein paar Fragen, bevor wir loslegen können. Du kannst diese überspringen und später bearbeiten.</p>
        <Button className="btn1" onClick={() => setShowIntroScreen(false)}>Fragen starten</Button>
      </div>
    ) : showCompletionScreen ? (
      <CompletionScreen onSubmit={handleSubmit} />
    ) : (
      <div>
        <p>{questions[currentQuestionIndex]}</p>
        {renderInputField()}
        <div className="button-group">
          <Button className="btn1" onClick={handleNextOrSkip}>Überspringen</Button>
          <Button className="btn1" onClick={handleNextOrSkip}>Nächste</Button>
        </div>
      </div>
    )}
  </div>
);

};

export default Questionnaire;