import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 position-relative z-3">
      <Container>
        <p>{new Date().getFullYear()} Fitness Tracker. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;