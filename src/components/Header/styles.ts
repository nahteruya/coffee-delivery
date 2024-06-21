import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 2;
  background: ${(props) => props.theme["white"]};
  align-items: center;
  padding: 1rem 8rem;

  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  nav {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    max-height: 38px;
  }
`;

export const LocationTag = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0.5rem;
  background: ${(props) => props.theme["purple-light"]};
  border-radius: 6px;
  cursor: default;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const ShoppingCartContainer = styled.div`
  align-self: flex-end;
  cursor: default;

  span {
    display: flex;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 3;
    margin-bottom: -10px;
    left: 25px;
    background: ${(props) => props.theme["yellow-dark"]};
    border-radius: 50%;
    color: ${(props) => props.theme["white"]};
    font-size: 0.75rem;
    font-weight: bold;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background: ${(props) => props.theme["yellow-light"]};
    border-radius: 6px;
    z-index: 1;

    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;
