import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.bgCustom} text-white text-center py-2 position-relative bottom-0 w-100 z-0`}>
  <Container>
    <p className="mb-0">{new Date().getFullYear()} Fitness Tracker. All Rights Reserved.</p>
  </Container>
</footer>

  );
};

export default Footer;
