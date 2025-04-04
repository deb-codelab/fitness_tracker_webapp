"use client"; // For React state/hooks in App Router

import { Card, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div>
      <h2>Fitness Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card className="p-3 shadow">
            <Card.Body>
              <h4>Exercises</h4>
              <p>{2}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow">
            <Card.Body>
              <h4>Meals</h4>
              <p>{3}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow">
            <Card.Body>
              <h4>Sleep</h4>
              <p>{8}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
