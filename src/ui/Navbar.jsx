import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  font-size: 1.7rem;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  text-transform: uppercase;
`;

const StyledLink = styled(NavLink)`
  transition: color 0.3s ease;
  font-weight: 500;

  &:hover,
  &.active {
    color: var(--active);
  }
`;

export default function Navbar() {
  return (
    <StyledList>
      <StyledListItem>
        <StyledLink to="/home">Home</StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink to="/about">About</StyledLink>
      </StyledListItem>
      <StyledListItem>
        <StyledLink to="/natiq">Natiq</StyledLink>
      </StyledListItem>
    </StyledList>
  );
}
