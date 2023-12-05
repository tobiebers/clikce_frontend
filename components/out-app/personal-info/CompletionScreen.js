import React from 'react';
import { Button } from 'react-bootstrap';

const CompletionScreen = ({ onSubmit }) => {
  return (
    <div className="completion-screen">
      <p>Bereit zum Starten?</p>
      <Button onClick={onSubmit}>Fertig stellen</Button>
    </div>
  );
};

export default CompletionScreen;