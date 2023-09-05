import { styled } from "styled-components";
import Container from "../ui/Container";

const Paragraph = styled.p`
  font-size: 2rem;
  width: 75%;
  line-height: 1.9;
`;

export default function About() {
  return (
    <Container>
      <h1>About Us</h1>
      <Paragraph>
        Transforming written words into audible human-like speech. Our service
        allows you to enter Arabic text, and it will be converted into spoken
        audio with an electronic voice, with echoed three times. We strive to
        provide a seamless and natural text-to-speech experience for Arabic
        speakers.
      </Paragraph>
    </Container>
  );
}
