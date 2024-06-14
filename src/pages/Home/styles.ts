import styled from "styled-components";

export const HomeContainer = styled.main`
  position: relative;
  z-index: 1;
  top: 4.5rem;
  padding: 0 8rem;
`;

export const HeroSection = styled.section`
  display: flex;
  gap: 3.5rem;
  padding: 5.75rem 0;

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: bolder;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Info = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1.25rem 2rem;

  > div {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  svg {
    padding: 0.5rem;
    border-radius: 50%;
  }
`;

export const Menu = styled.section`
  padding: 2rem 0;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-weight: bolder;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 54px;
  }

  ul {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 2.5rem 2rem;
  }
`;
