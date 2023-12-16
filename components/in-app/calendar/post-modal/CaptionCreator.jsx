import React from 'react';
import { Form, Button } from 'react-bootstrap';

function CaptionCreator({ caption, onCaptionChange, onCreateCaption }) {
  return (
    <>
      <Form.Group>
        <Form.Label>Caption</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter caption"
          value={caption}
          onChange={onCaptionChange}
          className="captionCreatorTextarea"
        />
      </Form.Group>
      <Button onClick={onCreateCaption}>Erstelle Caption</Button>
    </>
  );
}

export default CaptionCreator;
