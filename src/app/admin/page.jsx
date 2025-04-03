"use client"; // For React state/hooks in App Router

import { Card, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card className="p-3 shadow">
            <Card.Body>
              <h4>Total Users</h4>
              {/* <p>{user.totalUsers}</p> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow">
            <Card.Body>
              <h4>New Orders</h4>
              {/* <p>{user.newOrders}</p> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3 shadow">
            <Card.Body>
              <h4>Revenue</h4>
              {/* <p>${user.revenue}</p> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
