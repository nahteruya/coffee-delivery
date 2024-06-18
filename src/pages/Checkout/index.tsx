import { CreditCard, CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import {
  AddressForm,
  AddressHeading,
  CheckoutContainer,
  CheckoutInfoContainer,
  InfoContainer,
  PaymentForm,
  PaymentHeading,
  PricesInfo,
  Radio,
  TextInput,
} from "./styles";
import { CardCheckout } from "../../components/CardCheckout";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <form>
          <InfoContainer>
            <AddressHeading>
              <MapPinLine size={22} />
              <div>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeading>
            <AddressForm>
              <TextInput
                type="text"
                placeholder="CEP"
                style={{ gridArea: "cep" }}
              />
              <TextInput
                type="text"
                placeholder="Rua"
                style={{ gridArea: "rua" }}
              />
              <TextInput
                type="text"
                placeholder="Número"
                style={{ gridArea: "numero" }}
              />
              <TextInput
                type="text"
                placeholder="Complemento"
                style={{ gridArea: "complemento" }}
              />
              <TextInput
                type="text"
                placeholder="Bairro"
                style={{ gridArea: "bairro" }}
              />
              <TextInput
                type="text"
                placeholder="Cidade"
                style={{ gridArea: "cidade" }}
              />
              <TextInput
                type="text"
                placeholder="UF"
                style={{ gridArea: "uf" }}
              />
            </AddressForm>
          </InfoContainer>
          <InfoContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />
              <div>
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>
            <PaymentForm>
              <Radio>
                <input type="radio" name="paymentMethod" />
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </Radio>
              <Radio>
                <input type="radio" name="paymentMethod" />
                <CreditCard size={16} />
                CARTÃO DE DÉBITO
              </Radio>
              <Radio>
                <input type="radio" name="paymentMethod" />
                <CreditCard size={16} />
                DINHEIRO
              </Radio>
            </PaymentForm>
          </InfoContainer>
        </form>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CheckoutInfoContainer>
          <CardCheckout />
          <PricesInfo>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </PricesInfo>
          <button>CONFIRMAR PEDIDO</button>
        </CheckoutInfoContainer>
      </div>
    </CheckoutContainer>
  );
}
