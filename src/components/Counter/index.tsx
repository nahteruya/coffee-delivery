import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer } from "./style";
import { useContext, useState } from "react";
import { CartItemsContext } from "../../context/CartItemsContext";

interface CounterProps {
  coffeeId: string;
  initialQuantity: number;
}

export function Counter({ coffeeId, initialQuantity }: CounterProps) {
  const { updateQuantity } = useContext(CartItemsContext);
  const [quantity, setQuantity] = useState(initialQuantity);

  function handleDecreaseQuantity() {
    if (quantity > 0) {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity - 1;
        updateQuantity(coffeeId, newQuantity);
        return newQuantity;
      });
    }
  }

  function handleIncreaseQuantity() {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      updateQuantity(coffeeId, newQuantity);
      return newQuantity;
    });
  }

  return (
    <CounterContainer>
      <button onClick={handleDecreaseQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncreaseQuantity}>
        <Plus size={14} />
      </button>
    </CounterContainer>
  );
}
