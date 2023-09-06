import React from "react";
import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const LayoutStyle = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: var(--light-blue);
  overflow: hidden;
  @media screen and (max-width: 600px) {
    overflow-y: auto;
  }
`;

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    width: 95%;
    margin: auto;
  }
`;

export default function AppLayout() {
  return (
    <>
      <LayoutStyle>
        <Header />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </LayoutStyle>
    </>
  );
}
