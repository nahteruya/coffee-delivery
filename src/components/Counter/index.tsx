import { Minus, Plus } from "@phosphor-icons/react";
import { CounterContainer } from "./style";

interface CounterProps {
  number: number;
  increase?: () => void;
  decrease?: () => void;
}

export function Counter({ number, increase, decrease }: CounterProps) {
  return (
    <CounterContainer>
      <button onClick={decrease}>
        <Minus size={14} />
      </button>
      <span>{number}</span>
      <button onClick={increase}>
        <Plus size={14} />
      </button>
    </CounterContainer>
  );
}
