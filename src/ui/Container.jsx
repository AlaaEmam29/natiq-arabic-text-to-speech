import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  h1 {
    font-size: 3.5rem;
    letter-spacing: 0.15rem;
  }
  p {
    font-size: 2rem;
  }
`;
const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
export default Container;
