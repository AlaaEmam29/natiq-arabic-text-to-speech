import { Link } from "react-router-dom";
import Button from "../ui/Button";
import styled from "styled-components";
import Container from "../ui/Container";

export default function Home() {
  return (
    <Container>
      <h1>Arabic Text-to-Speech Service</h1>
      <p>Welcome to our service.</p>
      <Link to="/natiq">
        <Button>Start</Button>
      </Link>
    </Container>
  );
}
