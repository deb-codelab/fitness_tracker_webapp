import Image from "next/image";
import { Container, Row } from "react-bootstrap";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Container className="my-4">
        <Row>Home</Row>
      </Container>
    </div>
  );
}
