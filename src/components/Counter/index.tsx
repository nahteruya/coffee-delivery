import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer } from "./style";

interface CounterProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

export function Counter({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: CounterProps) {
  return (
    <CounterContainer>
      <button onClick={decreaseQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>
        <Plus size={14} />
      </button>
    </CounterContainer>
  );
}
