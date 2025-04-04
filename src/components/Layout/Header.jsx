"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown, NavLink, NavbarBrand, NavbarToggle, NavbarCollapse } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

const Header = () => {
  const userImageUrl = "/user.svg"; // Replace with actual remote URL
  const router = useRouter();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className={styles.bgCustom}>
      <Container>
        <NavbarBrand as={Link} href="/">Fitness Tracker</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={<img src={userImageUrl} alt="User" width="30" height="30" className="rounded-circle" />} id="user-dropdown" align="end">
              <NavDropdown.Item as={Link} href="/dashboard">Dashbaord</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href="/auth">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;
