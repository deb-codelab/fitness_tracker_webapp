"use client";

import { ListGroup, Badge, Card, Container } from "react-bootstrap";
import { Clock, Flame, Calendar } from "lucide-react";

export default function WorkoutListPage() {
  const dummyLog = [
    {
      exerciseType: "Running",
      duration: "30",
      calories: "250",
      date: "2025-04-04",
      notes: "Morning jog around the park",
    },
    {
      exerciseType: "Cycling",
      duration: "45",
      calories: "400",
      date: "2025-04-03",
      notes: "Evening ride with friends",
    },
    {
      exerciseType: "Yoga",
      duration: "60",
      calories: "200",
      date: "2025-04-02",
      notes: "Relaxing session with stretching",
    },
  ];

  return (
    <Container className="py-4">
      <WorkoutList log={dummyLog} />
    </Container>
  );
}

function WorkoutList({ log }) {
  if (!log || log.length === 0) {
    return <p className="text-muted text-center">No workouts logged yet.</p>;
  }

  return (

        <ListGroup variant="flush">
          {log.map((entry, idx) => (
            <ListGroup.Item
              key={idx}
              className="py-3 px-2 border-0 border-bottom"
            >
              <div className="d-flex justify-content-between flex-wrap align-items-start">
                <div>
                  <h6 className="mb-1 fw-bold">{entry.exerciseType}</h6>
                  <div className="text-muted small d-flex gap-3 flex-wrap">
                    <span><Calendar size={14} className="me-1" /> {entry.date}</span>
                    <span><Clock size={14} className="me-1" /> {entry.duration} mins</span>
                    <span><Flame size={14} className="me-1" /> {entry.calories} kcal</span>
                  </div>
                  {entry.notes && (
                    <div className="text-secondary small fst-italic mt-1">
                      {entry.notes}
                    </div>
                  )}
                </div>
                <Badge bg="primary" pill className="mt-2 mt-sm-0">
                  #{log.length - idx}
                </Badge>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
  );
}
