import { ReactNode, createContext, useState } from "react";
import { checkoutFormData } from "../pages/Checkout";
import { useNavigate } from "react-router-dom";

export interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export interface CoffeeCart {
  coffee: Coffee;
  quantity: number;
}

export interface Order extends checkoutFormData {
  id: number;
  items: CoffeeCart[];
}

interface CartItemsContextType {
  coffeesInCart: CoffeeCart[];
  orders: Order[];
  addCoffeeInCart: (newCoffeeItem: CoffeeCart) => void;
  removeCoffeeFromCart: (coffeeItemId: string) => void;
  increaseCoffeeQuantity: (coffeeItemId: string) => void;
  decreaseCoffeeQuantity: (coffeeItemId: string) => void;
  checkout: (data: checkoutFormData) => void;
}

interface CartItemsContextProviderProps {
  children: ReactNode;
}

export const CartItemsContext = createContext({} as CartItemsContextType);

export function CartItemsContextProvider({
  children,
}: CartItemsContextProviderProps) {
  const [coffeesInCart, setCoffeesInCart] = useState<CoffeeCart[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  function addCoffeeInCart(newCoffeeItem: CoffeeCart) {
    setCoffeesInCart((prevCoffeeInCart) => [
      ...prevCoffeeInCart,
      newCoffeeItem,
    ]);
  }

  function removeCoffeeFromCart(coffeeItemId: string) {
    const newCoffeesInCart = coffeesInCart.filter(
      (item) => item.coffee.id !== coffeeItemId
    );
    setCoffeesInCart(newCoffeesInCart);
  }

  function increaseCoffeeQuantity(coffeeItemId: string) {
    setCoffeesInCart((prevCoffeesInCart) =>
      prevCoffeesInCart.map((coffeeInCart) => {
        if (coffeeInCart.coffee.id === coffeeItemId) {
          return { ...coffeeInCart, quantity: coffeeInCart.quantity + 1 };
        } else {
          return coffeeInCart;
        }
      })
    );
  }

  function decreaseCoffeeQuantity(coffeeItemId: string) {
    setCoffeesInCart((prevCoffeesInCart) =>
      prevCoffeesInCart.map((coffeeInCart) => {
        if (coffeeInCart.coffee.id === coffeeItemId) {
          return { ...coffeeInCart, quantity: coffeeInCart.quantity - 1 };
        } else {
          return coffeeInCart;
        }
      })
    );
  }

  function checkout(data: checkoutFormData) {
    if (coffeesInCart.length === 0) {
      return alert("É preciso ter pelo menos um item no carrinho");
    }
    const newOrder = {
      id: new Date().getTime(),
      items: coffeesInCart,
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf,
      metodoDePagamento: data.metodoDePagamento,
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setCoffeesInCart([]);
    navigate(`/order/${newOrder.id}/success`);
  }

  return (
    <CartItemsContext.Provider
      value={{
        coffeesInCart,
        orders,
        addCoffeeInCart,
        removeCoffeeFromCart,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        checkout,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}
