import { ShoppingCart } from "@phosphor-icons/react";
import { Counter } from "../Counter";
import { CardContainer, CoffeeImage, Dinamic, Tags } from "./styles";
import { useState } from "react";

interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

interface CardProp {
  coffee: Coffee;
}

export function Card({ coffee }: CardProp) {
  const [quantity, setQuantity] = useState(0);

  function addQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function removeQuantity() {
    setQuantity((prevQuantity) =>
      prevQuantity > 0 ? prevQuantity - 1 : prevQuantity
    );
  }

  return (
    <CardContainer>
      <CoffeeImage src={coffee.image} alt={coffee.title} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </Tags>
      <h3>{coffee.title}</h3>
      <span>{coffee.description}</span>
      <Dinamic>
        <span>
          R$ <strong>{coffee.price.toFixed(2)}</strong>
        </span>
        <Counter
          number={quantity}
          increase={addQuantity}
          decrease={removeQuantity}
        />
        <button>
          <ShoppingCart size={22} />
        </button>
      </Dinamic>
    </CardContainer>
  );
}
