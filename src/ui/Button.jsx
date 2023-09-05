import styled from "styled-components";

const Button = styled.button`
  all: unset;
  color: white;
  background-color: #1c75bc;
  padding: 1rem 3rem;
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #145a9e;
  }

  &:active {
    background-color: #0f4372;
  }

  &:focus {
    outline: 2px solid #1c75bc;
  }
`;

export default Button;
