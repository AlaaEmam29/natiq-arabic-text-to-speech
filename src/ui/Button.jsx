import styled from "styled-components";

const Button = styled.button`
  all: unset;
  color: white;
  background-color: var(--bright-blue);
  padding: 0.7rem 4rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.7rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background-color: var(--color-hover);
  }

  &:active {
    background-color: var(--color-hover);
  }

  &:focus {
    outline: 2px solid var(--color-hover);
  }
  &:disabled {
    background-color: var(--color-input-dark);
    opacity: 0.5;
  }
`;

export default Button;
