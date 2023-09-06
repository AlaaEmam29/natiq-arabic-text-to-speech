import styled, { css } from "styled-components";
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.col}, minmax(auto, 1fr));
  align-items: center;
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, minmax(auto, 1fr));
  }
`;

export default Row;
