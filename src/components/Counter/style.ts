import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 8px;
  background: ${(props) => props.theme["base-button"]};
  border-radius: 6px;

  > button {
    border: none;
    background: ${(props) => props.theme["base-button"]};
    cursor: pointer;
  }
  > span {
    width: 1.5rem;
    text-align: center;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.3;
    color: ${(props) => props.theme["base-title"]};
  }
`;
