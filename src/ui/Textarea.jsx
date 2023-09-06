import { styled } from "styled-components";

const Textarea = styled.textarea`
  border: 1px solid var(--color-input-bright);
  background-color: var(--color-input-bright);
  border-radius: 7px;
  padding: 0.8rem 1.2rem;
  width: 100%;
  height: 25rem;
  resize: none;
  font-size: 2.2rem;

  &:disabled {
    background-color: var(--color-input-dark);
    opacity: 0.5;
  }
`;
export default Textarea;
