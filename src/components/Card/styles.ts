import styled from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 0 20px 20px 20px;

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 8px;
  }

  > span {
    color: ${(props) => props.theme["base-label"]};
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.3;
    text-align: center;
    margin-bottom: 32px;
  }
`;

export const CoffeeImage = styled.img`
  width: 7.5rem;
  margin-top: -20px;
  margin-bottom: 12px;
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-bottom: 16px;

  span {
    font-size: 0.625rem;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme["yellow-dark"]};
    text-transform: uppercase;
    padding: 4px 8px;
    background: ${(props) => props.theme["yellow-light"]};
    border-radius: 100px;
  }
`;

export const Dinamic = styled.div`
  display: flex;
  flex-direction: row;

  > span {
    font-size: 0.875;
    font-weight: normal;
    line-height: 1.3;
    color: ${(props) => props.theme["base-text"]};
    margin-right: 23px;

    > strong {
      font-family: "Baloo 2", sans-serif;
      font-size: 1.5rem;
      font-weight: bolder;
    }
  }

  > button {
    display: flex;
    align-items: center;
    border: none;
    background: ${(props) => props.theme["purple-dark"]};
    border-radius: 6px;
    padding: 8px;
    margin-left: 8px;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme["white"]};
    }
  }
`;
