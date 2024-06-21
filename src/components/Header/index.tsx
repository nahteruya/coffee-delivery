import { HeaderContainer, LocationTag, ShoppingCartContainer } from "./styles";
import logoCoffeeDelivery from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </ShoppingCartContainer>
      </nav>
    </HeaderContainer>
  );
}
