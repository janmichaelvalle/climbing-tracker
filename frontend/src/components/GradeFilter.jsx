import React from 'react';
import { Form } from 'react-bootstrap';

const GradeFilter = ({ grades, selectedGrade, onSelectGrade }) => {
  return (
    <Form.Group controlId="grade-select">
      <Form.Label>Select Grade:</Form.Label>
      <Form.Control
        as="select"
        value={selectedGrade}
        onChange={(e) => onSelectGrade(e.target.value)}
      >
        <option value="">All</option>
        {grades.map((grade) => (
          <option key={grade} value={grade}>
            {grade}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default GradeFilter;
