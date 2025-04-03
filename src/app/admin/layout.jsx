"use client";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

export default function AdminLayout({ children }) {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sidebar */}
          <Col md={2} className="bg-light p-3">
            <Nav className="flex-column">
              <Nav.Link href="/admin">Dashboard</Nav.Link>
              <Nav.Link href="/admin/users">Users</Nav.Link>
              <Nav.Link href="/admin/settings">Settings</Nav.Link>
            </Nav>
          </Col>

          {/* Main Content */}
          <Col md={10} className="p-4">{children}</Col>
        </Row>
      </Container>
    </div>
  );
}
