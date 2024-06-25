import { HeaderContainer, LocationTag, ShoppingCartContainer } from "./styles";
import logoCoffeeDelivery from "../../assets/Logo.png";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartItemsContext } from "../../context/CartItemsContext";

export function Header() {
  const { coffeesInCart } = useContext(CartItemsContext);

  const numberOfItemsInCart = () => {
    return coffeesInCart.reduce((acum, aux) => acum + aux.quantity, 0);
  };

  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="Coffee Delivery" height={40} />
      <nav>
        <LocationTag>
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </LocationTag>
        <ShoppingCartContainer>
          {numberOfItemsInCart() !== 0 && <span>{numberOfItemsInCart()}</span>}
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </ShoppingCartContainer>
      </nav>
    </HeaderContainer>
  );
}
