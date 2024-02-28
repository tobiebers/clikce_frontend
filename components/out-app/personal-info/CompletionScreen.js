import React from 'react';
import { Button } from 'react-bootstrap';

const CompletionScreen = ({ onSubmit }) => {
  return (
    <div className="completion-screen">
      <p className="text-lx">Bereit zum Starten?</p>
      <Button className="btn2" onClick={onSubmit}>Fertig stellen</Button>
    </div>
  );
};

export default CompletionScreen;