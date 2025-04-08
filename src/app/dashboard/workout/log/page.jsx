"use client";

import { useState } from "react";
import { Container, Row, Col, Form, Button, Card, ListGroup } from "react-bootstrap";

export default function WorkoutLogPage() {
  const [formData, setFormData] = useState({
    exerciseType: "",
    duration: "",
    calories: "",
    date: "",
    notes: "",
  });

  const [log, setLog] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLog((prev) => [formData, ...prev]);
    setFormData({
      exerciseType: "",
      duration: "",
      calories: "",
      date: "",
      notes: "",
    });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-4">
        <Col md={8}>
          <Card className="shadow-sm p-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Type of Exercise</Form.Label>
                <Form.Select
                  name="exerciseType"
                  value={formData.exerciseType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Exercise</option>
                  <option value="Running">Running</option>
                  <option value="Cycling">Cycling</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Weightlifting">Weightlifting</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Duration (minutes)</Form.Label>
                <Form.Control
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  min={1}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Calories Burned</Form.Label>
                <Form.Control
                  type="number"
                  name="calories"
                  value={formData.calories}
                  onChange={handleChange}
                  min={0}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Optional notes..."
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Add Workout
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      {log.length > 0 && (
        <Row className="justify-content-center">
          <Col md={8}>
            <h4 className="mt-4 mb-3">Workout History</h4>
            <ListGroup>
              {log.map((entry, idx) => (
                <ListGroup.Item key={idx} className="d-flex flex-column">
                  <strong>{entry.exerciseType}</strong>
                  <small>
                    {entry.date} | {entry.duration} min | {entry.calories} kcal
                  </small>
                  {entry.notes && <em className="mt-1 text-muted">{entry.notes}</em>}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
}
