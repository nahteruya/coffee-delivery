import styled from "styled-components";

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;

  height: 42px;
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  padding: 0.75rem;

  input {
    background: transparent;
    border: none;
    flex: 1;

    ::placeholder {
      font-size: 0.875rem;
      line-height: 1.3;
      font-weight: normal;
      color: ${(props) => props.theme["base-label"]};
    }
  }

  > span {
    font-size: 0.75rem;
    line-height: 1.3;
    font-style: italic;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  font-weight: 400;
  color: red;
  padding: 0 0.75rem;
`;
