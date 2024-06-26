import styled from "styled-components";

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};

  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1.6;
  color: ${(props) => props.theme["base-text"]};
  cursor: pointer;

  svg {
    color: ${(props) => props.theme["purple"]};
    margin-right: 12px;
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  &[data-state="true"] {
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }

  input[type="radio"] {
    visibility: none;
    max-width: 0;
  }
`;
