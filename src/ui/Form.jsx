import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  font-size: 1.4rem;
  width: 80rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export default Form;
