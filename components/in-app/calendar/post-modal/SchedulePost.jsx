import React from 'react';
import { Form } from 'react-bootstrap';

const SchedulePost = ({ isScheduled, setIsScheduled, scheduledDate, setScheduledDate, scheduledTime, setScheduledTime }) => {
  return (
    <>
      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Post planen"
          className="custom-checkbox "
          checked={isScheduled}
          onChange={(e) => setIsScheduled(e.target.checked)}
        />
      </Form.Group>

      {isScheduled && (
        <div>
          <Form.Group>
            <Form.Label>Datum</Form.Label>
            <Form.Control
              type="date"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Uhrzeit</Form.Label>
            <Form.Control
              type="time"
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
            />
          </Form.Group>
        </div>
      )}
    </>
  );
}

export default SchedulePost;
