"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, NavLink, NavbarBrand, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Header = () => {
  const userImageUrl = "/user.svg"; // Replace with actual remote URL
  const router = useRouter();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <NavbarBrand as={Link} href="/">Fitness Tracker</NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink as={Link} href="/about">About</NavLink>
            <NavLink as={Link} href="/contact">Contact</NavLink>
            <NavDropdown title={<img src={userImageUrl} alt="User" width="30" height="30" className="rounded-circle" />} id="user-dropdown" align="end">
              <NavDropdown.Item onClick={(e) => { e.preventDefault(); router.push('/profile'); }}>Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={(e) => { e.preventDefault(); router.push('/auth'); }}>Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <Container>
        <p>&copy; {new Date().getFullYear()} Fitness Tracker. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col">
          <Header />
            <main className="flex-grow mt-5">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
