import { NavLink, Nav, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "./DashboardSidebar.module.css";

const DashboardSidebar = () => {
  return (
    <Col md={2} className="bg-light position-fixed d-flex flex-column min-vh-100 shadow-sm p-3">
        <Nav className="flex-column mt-2">
        <NavLink as={Link} href="/dashboard" className={styles.customNavlink}>Dashboard</NavLink>
        <NavLink as={Link} href="/dashboard/profile" className={styles.customNavlink}>Profile</NavLink>
        <NavLink as={Link} href="/dashboard/workout" className={styles.customNavlink}>Workout</NavLink>
        <NavLink as={Link} href="/dashboard/goals" className={styles.customNavlink}>Goals</NavLink>
        </Nav>
    </Col>
  );
};

export default DashboardSidebar;