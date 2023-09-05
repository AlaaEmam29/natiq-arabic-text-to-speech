import { styled } from "styled-components";

const Textarea = styled.textarea`
  border: 1px solid #f1f1f1;
  background-color: #f1f1f1;
  border-radius: 7px;
  padding: 0.8rem 1.2rem;
  width: 100%;
  height: 25rem;
  resize: none;
  font-size: 2.2rem;

  &:disabled {
    background-color: #e9ecef;
    opacity: 0.5;
  }
`;
export default Textarea;
