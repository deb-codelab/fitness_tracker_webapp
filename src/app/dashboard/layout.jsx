
import { Container, Row, Col } from "react-bootstrap";
import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import DashboardTitlebar from "@/components/Dashboard/DashboardTitlebar";

export default function DashbaordLayout({ children }) {
  return (
    <Container fluid className="d-flex flex-column min-vh-100">
      <Row className="flex-grow-1">
        {/* Sidebar */}
        <DashboardSidebar/>
        {/* Main Content */}
        <Col md={{ span: 10, offset: 2 }} className="min-vh-100">
          <DashboardTitlebar />
          <Row className="p-3">{children}</Row>
        </Col>
      </Row>
    </Container>
  );
}
