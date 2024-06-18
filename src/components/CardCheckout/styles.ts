import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  margin-bottom: 24px;

  > strong {
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 20px;

  > img {
    width: 64px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > span {
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.3;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;

export const Dinamic = styled.div`
  display: flex;
  gap: 8px;

  > button {
    display: flex;
    align-items: center;
    gap: 4px;
    border: none;
    background: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    padding: 0 8px;
    font-size: 0.75rem;
    font-weight: normal;
    color: ${(props) => props.theme["base-text"]};
    cursor: pointer;

    svg {
      color: ${(props) => props.theme["purple"]};
    }
  }
`;
