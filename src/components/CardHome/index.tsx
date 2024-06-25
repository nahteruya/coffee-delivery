import { ShoppingCart } from "@phosphor-icons/react";
import { Counter } from "../Counter";
import { CardContainer, CoffeeImage, Dinamic, Tags } from "./styles";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext, Coffee } from "../../context/CartItemsContext";

interface CardProp {
  coffee: Coffee;
}

export function Card({ coffee }: CardProp) {
  const [quantity, setQuantity] = useState(0);
  const { addCoffeeInCart } = useContext(CartItemsContext);

  function handleAddCoffeeInCart() {
    addCoffeeInCart({ coffee: coffee, quantity });
  }

  function handleIncreaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function handleDecreaseQuantity() {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 0) return prevQuantity - 1;
      return 0;
    });
  }

  return (
    <CardContainer>
      <CoffeeImage src={coffee.image} alt={coffee.title} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={coffee.tags.indexOf(tag)}>{tag}</span>
        ))}
      </Tags>
      <h3>{coffee.title}</h3>
      <span>{coffee.description}</span>
      <Dinamic>
        <span>
          R$ <strong>{coffee.price.toFixed(2)}</strong>
        </span>
        <Counter
          quantity={quantity}
          increaseQuantity={handleIncreaseQuantity}
          decreaseQuantity={handleDecreaseQuantity}
        />
        <Link to="/checkout" onClick={handleAddCoffeeInCart}>
          <ShoppingCart size={22} />
        </Link>
      </Dinamic>
    </CardContainer>
  );
}
