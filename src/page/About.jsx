import { styled } from "styled-components";
import Container from "../ui/Container";
import Row from "../ui/Row";
import Img from "../ui/Img";
import image from "../assets/img/Who-we-Are-700x476.png";
const StyleAboutInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  p {
    font-size: 2rem;
    width: 75%;
    line-height: 1.9;
  }
  @media screen and (max-width: 600px) {
    p {
      font-size: 1.4rem;

      width: 100%;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    p {
      font-size: 1.6rem;

      width: 100%;
    }
  }
`;

export default function About() {
  return (
    <Container>
      <Row col={2}>
        <Img src={image} alt="speech-voice" />

        <StyleAboutInfo>
          <h1>About US</h1>
          <p>
            Natiq is RDI’s state-of-the-art text-to-speech software, that
            enables users to convert their Arabic input text into spoken words
            with different natural voices. This technology is built on Tashkeel,
            RDI’s Arabic Diacritizer. Tashkeel converts raw Arabic text into
            diacritized text, so that it can be read out loud as speech with the
            proper pronunciation. Natiq is an easy-to-use robust software that
            allows for different users’ preferences, resulting in seamless
            audio-powered applications that enrich user experiences and engage
            audiences.{" "}
          </p>
        </StyleAboutInfo>
      </Row>
    </Container>
  );
}
