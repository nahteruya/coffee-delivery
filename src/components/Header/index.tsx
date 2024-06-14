import {
  HeaderContainer,
  LocationTag,
  ShoppingCartContainer,
  ShoppingCartLink,
} from "./styles";
import logoCoffeeDelivery from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="Coffee Delivery" height={40} />
      <nav>
        <LocationTag>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </LocationTag>
        <ShoppingCartContainer>
          <span>2</span>
          <ShoppingCartLink href="#">
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartLink>
        </ShoppingCartContainer>
      </nav>
    </HeaderContainer>
  );
}
