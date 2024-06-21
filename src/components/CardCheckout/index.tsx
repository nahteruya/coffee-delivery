import { Trash } from "@phosphor-icons/react";
import { Counter } from "../Counter";
import { CoffeeInfo, Container, Dinamic } from "./styles";
import { CoffeeCart } from "../../context/CartItemsContext";

interface CardCheckoutProps {
  coffeeItem: CoffeeCart;
}

export function CardCheckout({ coffeeItem }: CardCheckoutProps) {
  const { coffee, quantity } = coffeeItem;

  return (
    <Container>
      <CoffeeInfo>
        <img src={coffee.image} alt={coffee.title} />
        <div>
          <span>{coffee.title}</span>
          <Dinamic>
            <Counter coffeeId={coffee.id} initialQuantity={quantity} />
            <button>
              <Trash size={20} />
              REMOVER
            </button>
          </Dinamic>
        </div>
      </CoffeeInfo>
      <strong>R$ {coffee.price.toFixed(2)}</strong>
    </Container>
  );
}
