import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const LayoutStyle = styled.div`
  height: 100dvh;
  width: 100vw;
  background-color: #f1f9ff;
  overflow: hidden;
`;
const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
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
