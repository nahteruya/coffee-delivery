import { Trash } from "@phosphor-icons/react";
import data from "../../../data.json";
import { Counter } from "../Counter";
import { CoffeeInfo, Container, Dinamic } from "./styles";

export function CardCheckout() {
  const coffees = data.coffees[0];
  return (
    <Container>
      <CoffeeInfo>
        <img src={coffees.image} alt={coffees.title} />
        <div>
          <span>{coffees.title}</span>
          <Dinamic>
            <Counter number={0} />
            <button>
              <Trash size={20} />
              REMOVER
            </button>
          </Dinamic>
        </div>
      </CoffeeInfo>
      <strong>R$ {coffees.price.toFixed(2)}</strong>
    </Container>
  );
}
