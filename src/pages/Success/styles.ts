import styled from "styled-components";

export const SuccessContainer = styled.main`
  position: relative;
  z-index: 1;
  top: 4.5rem;
  padding: 0 8rem;
`;

export const SuccessContent = styled.div`
  display: grid;
  grid-template-columns: 526px 492px;
  gap: 102px;
  padding: 5rem 0 0;

  > img {
    align-self: flex-end;
  }
`;

export const SuccessText = styled.aside`
  h4 {
    font-family: "Baloo 2", sans-serif;
    font-weight: bolder;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme["yellow-dark"]};
    margin-bottom: 4px;
  }

  span {
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ConfirmationBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  padding: 2.5rem;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right bottom,
        ${(props) => props.theme["yellow"]},
        ${(props) => props.theme["purple"]}
      )
      border-box;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;
  margin-top: 40px;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;

  svg {
    padding: 6px;
    border-radius: 50%;
    color: ${(props) => props.theme["background"]};
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-weight: bold;
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme["base-text"]};
    }
  }

  span {
    max-width: 310px;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-text"]};
  }
`;
