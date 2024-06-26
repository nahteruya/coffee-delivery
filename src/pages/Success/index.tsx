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
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartItemsContext } from "../../context/CartItemsContext";

export function Success() {
  const theme = useTheme();
  const { orderId } = useParams();
  const { orders } = useContext(CartItemsContext);

  const currentOrder = orders.find((item) => item.id === Number(orderId));
  if (!currentOrder?.id) {
    return null;
  }

  const paymentMethod = {
    credit: "Cartão de crédito",
    debit: "Cartão de débito",
    cash: "Dinheiro",
  };

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
                Entrega em{" "}
                <strong>
                  {currentOrder.rua}, {currentOrder.numero}
                </strong>{" "}
                {currentOrder.bairro} - {currentOrder.cidade},{currentOrder.uf}
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
                <strong>{paymentMethod[currentOrder.metodoDePagamento]}</strong>
              </div>
            </OrderInfo>
          </ConfirmationBox>
        </SuccessText>
        <img src={illustration} alt="" />
      </SuccessContent>
    </SuccessContainer>
  );
}
