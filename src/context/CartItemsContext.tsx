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
  removeCoffeeFromCart: (coffeeItemId: string) => void;
  increaseCoffeeQuantity: (coffeeItemId: string) => void;
  decreaseCoffeeQuantity: (coffeeItemId: string) => void;
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

  return (
    <CartItemsContext.Provider
      value={{
        coffeesInCart,
        addCoffeeInCart,
        removeCoffeeFromCart,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}
