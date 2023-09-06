import { Link } from "react-router-dom";
import Button from "../ui/Button";
import styled from "styled-components";
import Container from "../ui/Container";
import Row from "../ui/Row";
import image from "../assets/img/4-1.png";
import Img from "../ui/Img";
const StyledButton = styled(Button)`
  background-color: var(--white);
  color: var(--bright-blue);
  border: 2px solid var(--bright-blue);
  &:hover {
    background-color: var(--bright-blue);
    color: var(--white);
  }
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
`;

export default function Home() {
  return (
    <Container>
      <Row col={2}>
        <StyledInfo>
          <h1>Natiq – Arabic Text to Speech</h1>
          <p>
            Natiq automatically reads your Arabic text out loud. You can
            generate audio files from text without the need for a professional
            reader.
          </p>
          <Link to="/natiq">
            <StyledButton>Start</StyledButton>
          </Link>
        </StyledInfo>
        <Img src={image} alt="speech-voice" />
      </Row>
    </Container>
  );
}
