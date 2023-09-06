import { toast } from "react-hot-toast";
import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  ${(props) =>
    props.type === "col" &&
    css`
      flex-direction: column;
      width: 100%;
      padding: 1.2rem 0px;
    `}
  ${(props) =>
    props.type === "row" &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    `}


      gap: 2.4rem;

  width: 100%;
  padding: 1.2rem 0px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 2rem;
`;
StyledFormRow.defaultProps = {
  type: "col",
};
function showToast(message) {
  return toast.error(message);
}

export default function FormRow({ label, error, children, type }) {
  return (
    <StyledFormRow type={type}>
      {label && <Label>{label}</Label>}
      {children}
      {error && showToast(error)}
    </StyledFormRow>
  );
}
