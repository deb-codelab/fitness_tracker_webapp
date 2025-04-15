"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown, NavLink, NavbarBrand, NavbarToggle, NavbarCollapse } from "react-bootstrap";
import Link from "next/link";
import styles from "./Header.module.css";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Header = () => {
  const userImageUrl = "/user.svg"; // Replace with actual remote URL
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        toast.success("Logged out successfully");
        // Clear user data from context
        logout();
        // Redirect to the login page
        router.refresh();
        router.push("/auth");
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <Navbar variant="dark" expand="lg" fixed="top" className={styles.bgCustom}>
      <Container>
        <NavbarBrand as={Link} href="/" className={styles.brandCustomText}>Fitness Tracker</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={<span className="d-inline-flex align-items-center gap-2"><img src={userImageUrl} alt="User" width="20" height="20" className="" /> <span>Hello, {user?.name || "Guest"}</span></span>} id="user-dropdown" align="end">
              {user ? (
                <>
                  <NavDropdown.Item as={Link} href="/dashboard">Dashboard</NavDropdown.Item>
                  <NavDropdown.Item as={Link} href="/dashboard/manage-account">Manage Account</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item as={Link} href="/auth">Login</NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default Header;
