import { Trash } from "@phosphor-icons/react";
import { Counter } from "../Counter";
import { CoffeeInfo, Container, Dinamic } from "./styles";
import { CartItemsContext, CoffeeCart } from "../../context/CartItemsContext";
import { useContext } from "react";

interface CardCheckoutProps {
  coffeeItem: CoffeeCart;
}

export function CardCheckout({ coffeeItem }: CardCheckoutProps) {
  const {
    removeCoffeeFromCart,
    increaseCoffeeQuantity,
    decreaseCoffeeQuantity,
  } = useContext(CartItemsContext);
  const { coffee, quantity } = coffeeItem;

  function handleRemoveCoffeeFromCart() {
    removeCoffeeFromCart(coffeeItem.coffee.id);
  }

  return (
    <Container>
      <CoffeeInfo>
        <img src={coffee.image} alt={coffee.title} />
        <div>
          <span>{coffee.title}</span>
          <Dinamic>
            <Counter
              quantity={quantity}
              increaseQuantity={() => increaseCoffeeQuantity(coffee.id)}
              decreaseQuantity={() => decreaseCoffeeQuantity(coffee.id)}
            />
            <button onClick={handleRemoveCoffeeFromCart}>
              <Trash size={20} />
              REMOVER
            </button>
          </Dinamic>
        </div>
      </CoffeeInfo>
      <strong>R$ {(coffee.price * quantity).toFixed(2)}</strong>
    </Container>
  );
}
