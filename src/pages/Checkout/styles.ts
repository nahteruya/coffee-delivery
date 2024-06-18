import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 32px;

  position: relative;
  z-index: 1;
  top: 4.5rem;
  padding: 2.5rem 8rem;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 15px;
  }
`;

export const InfoContainer = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  width: 640px;
  margin-bottom: 12px;
`;

const HeadingBase = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 2rem;

  h4 {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 2px;
  }

  p {
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.3;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const AddressHeading = styled(HeadingBase)`
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const PaymentHeading = styled(HeadingBase)`
  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const AddressForm = styled.div`
  display: grid;
  gap: 1rem 0.75rem;
  grid-template-columns: 200px 1fr 60px;
  grid-template-areas:
    "cep . ."
    "rua rua rua"
    "numero complemento complemento"
    "bairro cidade uf";
`;

export const TextInput = styled.input`
  height: 42px;
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  padding: 0.75rem;
  border-radius: 4px;

  ::placeholder {
    font-size: 0.875rem;
    line-height: 1.3;
    font-weight: normal;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const PaymentForm = styled.div`
  display: flex;
  gap: 12px;
`;

export const Radio = styled.label`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 16px;
  border-radius: 6px;
  background: ${(props) => props.theme["base-button"]};

  font-size: 0.75rem;
  font-weight: normal;
  line-height: 1.6;
  color: ${(props) => props.theme["base-text"]};

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  :active {
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }
`;

export const CheckoutInfoContainer = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px 6px 44px;
  width: 448px;

  > button {
    width: 100%;
    border: none;
    background: ${(props) => props.theme["yellow"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 6px;
    padding: 12px 0;
    margin-top: 24px;
    font-size: 0.875rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const PricesInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: flex;
    justify-content: space-between;

    :first-child {
      font-size: 0.875rem;
      font-weight: normal;
      line-height: 1.3;
      color: ${(props) => props.theme["base-text"]};
    }

    :last-child {
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.3;
      color: ${(props) => props.theme["base-text"]};
    }
  }

  :last-child {
    > span {
      font-size: 1.25rem;
      font-weight: bold;
      line-height: 1.3;
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;
