import { ReactNode, createContext, useState } from "react";

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

interface CartItemsContextType {
  coffeesInCart: CoffeeCart[];
  addCoffeeInCart: (newCoffeeItem: CoffeeCart) => void;
  updateQuantity: (coffeeId: string, quantity: number) => void;
}

interface CartItemsContextProviderProps {
  children: ReactNode;
}

export const CartItemsContext = createContext({} as CartItemsContextType);

export function CartItemsContextProvider({
  children,
}: CartItemsContextProviderProps) {
  const [coffeesInCart, setCoffeesInCart] = useState<CoffeeCart[]>([]);

  function addCoffeeInCart(newCoffeeItem: CoffeeCart) {
    setCoffeesInCart((prevCoffeeInCart) => [
      ...prevCoffeeInCart,
      newCoffeeItem,
    ]);
  }

  function updateQuantity(coffeeId: string, quantity: number) {
    setCoffeesInCart((prevCoffeesInCart) =>
      prevCoffeesInCart.map((coffeeInCart) => {
        if (coffeeInCart.coffee.id === coffeeId) {
          return { ...coffeeInCart, quantity: quantity };
        } else {
          return coffeeInCart;
        }
      })
    );
  }

  return (
    <CartItemsContext.Provider
      value={{ coffeesInCart, addCoffeeInCart, updateQuantity }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}
