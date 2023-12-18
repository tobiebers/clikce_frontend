import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Spinner from "react-bootstrap/Spinner";

function CaptionCreator({ caption, onCaptionChange, onCreateCaption, isLoading }) {
    return (
        <>
            <Form.Group>
                <Form.Label>Caption</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter caption"
                    value={caption}
                    onChange={(e) => onCaptionChange(e.target.value)}
                    className="captionCreatorTextarea"
                />
            </Form.Group>
            <Button className="create-caption-button" onClick={onCreateCaption} disabled={isLoading}>
                {isLoading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="custom-spinner" /> : 'Erstelle Ki Caption'}
            </Button>
        </>
    );
}

export default CaptionCreator;
