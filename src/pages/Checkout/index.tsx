import { CreditCard, CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import {
  AddressForm,
  AddressHeading,
  CheckoutContainer,
  CheckoutInfoContainer,
  InfoContainer,
  PaymentError,
  PaymentForm,
  PaymentHeading,
  PricesInfo,
} from "./styles";
import { CardCheckout } from "../../components/CardCheckout";
import { useContext } from "react";
import { CartItemsContext } from "../../context/CartItemsContext";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "../../components/TextInput";
import { Radio } from "../../components/Radio";
import { Link } from "react-router-dom";

const checkoutFormValidationSchema = zod.object({
  cep: zod.number({ invalid_type_error: "Informe o CEP" }),
  rua: zod.string().min(1, "Informe a rua"),
  numero: zod.string().min(1, "Informe o número"),
  complemento: zod.string(),
  bairro: zod.string().min(1, "Informe o bairro"),
  cidade: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  metodoDePagamento: zod.enum(["credit", "debit", "cash"], {
    invalid_type_error: "Informe um método de pagamento",
  }),
});

export type checkoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const { coffeesInCart, checkout } = useContext(CartItemsContext);

  const checkoutForm = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  });

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = checkoutForm;

  function handleSubmitCheckoutForm(data: checkoutFormData) {
    checkout(data);
  }

  function calculateTotalPrice() {
    return coffeesInCart.reduce(
      (acum, aux) => acum + aux.coffee.price * aux.quantity,
      0
    );
  }

  const selectedPaymentMethod = watch("metodoDePagamento");

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <form id="order" onSubmit={handleSubmit(handleSubmitCheckoutForm)}>
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
                type="number"
                placeholder="CEP"
                containerProps={{ style: { gridArea: "cep" } }}
                error={errors.cep}
                {...register("cep", { valueAsNumber: true })}
              />
              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: "rua" } }}
                error={errors.rua}
                {...register("rua")}
              />
              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: "numero" } }}
                error={errors.numero}
                {...register("numero")}
              />
              <TextInput
                placeholder="Complemento"
                containerProps={{ style: { gridArea: "complemento" } }}
                optional
                error={errors.complemento}
                {...register("complemento")}
              />
              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: "bairro" } }}
                error={errors.bairro}
                {...register("bairro")}
              />
              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: "cidade" } }}
                error={errors.cidade}
                {...register("cidade")}
              />
              <TextInput
                placeholder="UF"
                containerProps={{ style: { gridArea: "uf" } }}
                error={errors.uf}
                {...register("uf")}
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
              <Radio
                isSelected={selectedPaymentMethod === "credit"}
                {...register("metodoDePagamento")}
                value="credit"
              >
                <CreditCard size={16} />
                CARTÃO DE CRÉDITO
              </Radio>
              <Radio
                isSelected={selectedPaymentMethod === "debit"}
                {...register("metodoDePagamento")}
                value="debit"
              >
                <CreditCard size={16} />
                CARTÃO DE DÉBITO
              </Radio>
              <Radio
                isSelected={selectedPaymentMethod === "cash"}
                {...register("metodoDePagamento")}
                value="cash"
              >
                <CreditCard size={16} />
                DINHEIRO
              </Radio>
            </PaymentForm>
            {errors.metodoDePagamento && (
              <PaymentError>{errors.metodoDePagamento.message}</PaymentError>
            )}
          </InfoContainer>
        </form>
      </div>
      <div>
        <h2>Cafés selecionados</h2>
        <CheckoutInfoContainer>
          {coffeesInCart.map((coffeInCart) => (
            <CardCheckout
              key={coffeInCart.coffee.id}
              coffeeItem={coffeInCart}
            />
          ))}

          <PricesInfo>
            <div>
              <span>Total de itens</span>
              <span>{`R$${" "}${calculateTotalPrice().toFixed(2)}`}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3.50</span>
            </div>
            <div>
              <span>Total</span>
              <span>{`R$${" "}${(calculateTotalPrice() + 3.5).toFixed(
                2
              )}`}</span>
            </div>
          </PricesInfo>
          <button type="submit" form="order">
            CONFIRMAR PEDIDO
          </button>
        </CheckoutInfoContainer>
      </div>
    </CheckoutContainer>
  );
}
