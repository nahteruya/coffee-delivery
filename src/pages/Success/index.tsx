import illustration from "../../assets/Illustration.png";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import {
  ConfirmationBox,
  OrderInfo,
  SuccessContainer,
  SuccessContent,
  SuccessText,
} from "./styles";
import { useTheme } from "styled-components";

export function Success() {
  const theme = useTheme();
  return (
    <SuccessContainer>
      <SuccessContent>
        <SuccessText>
          <h4>Uhu! Pedido confirmado</h4>
          <span>Agora é só aguardar que logo o café chegará até você</span>
          <ConfirmationBox>
            <OrderInfo>
              <MapPin
                size={32}
                weight="fill"
                style={{ background: theme["purple"] }}
              />
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{" "}
                Farrapos - Porto Alegre, RS
              </span>
            </OrderInfo>
            <OrderInfo>
              <Timer
                size={32}
                weight="fill"
                style={{ background: theme["yellow"] }}
              />
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </OrderInfo>
            <OrderInfo>
              <CurrencyDollar
                size={32}
                weight="fill"
                style={{ background: theme["yellow-dark"] }}
              />
              <div>
                <span>Pagamento na entrega</span>
                <strong>Cartão de Crédito</strong>
              </div>
            </OrderInfo>
          </ConfirmationBox>
        </SuccessText>
        <img src={illustration} alt="" />
      </SuccessContent>
    </SuccessContainer>
  );
}
