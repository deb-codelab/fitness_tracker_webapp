"use client";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

export default function DashbaordLayout({ children }) {
  return (
      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={2} className="bg-light p-3">
            <Nav className="flex-column mt-2">
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/dashboard/profile">Profile</Nav.Link>
              <Nav.Link href="/dashboard/workout">Workout</Nav.Link>
              <Nav.Link href="/dashboard/goals">Goals</Nav.Link>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col md={10} className="p-4" style={{ minHeight: "100vh" }}>{children}</Col>
        </Row>
      </Container>

  );
}
