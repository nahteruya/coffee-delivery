import { ShoppingCart } from "@phosphor-icons/react";
import { Counter } from "../Counter";
import { CardContainer, CoffeeImage, Dinamic, Tags } from "./styles";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  CartItemsContext,
  Coffee,
  CoffeeCart,
} from "../../context/CartItemsContext";

interface CardProp {
  coffee: CoffeeCart;
}

export function Card({ coffee }: CardProp) {
  const { addCoffeeInCart } = useContext(CartItemsContext);

  function handleAddCoffeeInCart() {
    addCoffeeInCart({ coffee: coffee.coffee, quantity: coffee.quantity });
  }

  return (
    <CardContainer>
      <CoffeeImage src={coffee.coffee.image} alt={coffee.coffee.title} />
      <Tags>
        {coffee.coffee.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </Tags>
      <h3>{coffee.coffee.title}</h3>
      <span>{coffee.coffee.description}</span>
      <Dinamic>
        <span>
          R$ <strong>{coffee.coffee.price.toFixed(2)}</strong>
        </span>
        <Counter
          coffeeId={coffee.coffee.id}
          initialQuantity={coffee.quantity}
        />
        <Link to="/checkout" onClick={handleAddCoffeeInCart}>
          <ShoppingCart size={22} />
        </Link>
      </Dinamic>
    </CardContainer>
  );
}
