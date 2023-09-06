import { styled } from "styled-components";
import Navbar from "./Navbar";
const StyledHeader = styled.header`
  background-color: var(--bright-blue);
  padding: 1rem;
  div {
    width: 70%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--white);
  }
  @media screen and (max-width: 600px) {
    div {
      width: 100%;
    }
  }
`;
const Text = styled.h3`
  font-weight: bold;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-size: 3rem;
  font-style: italic;
`;
export default function Header() {
  return (
    <StyledHeader>
      <div>
        <Text>Natiq</Text>
        <Navbar />
      </div>
    </StyledHeader>
  );
}
