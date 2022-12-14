import React, { useContext, createContext } from "react";
import { addCart, getCart, removeCart } from "../../Services/Storage/LocalStorage";
import { ICart } from "./Card";

export type CartContextState = {
  cartItems: ICart[];
  addToCart: (item:ICart) => void;
  removeToCart: () => void;
};
const contextDefaultValues: CartContextState = {
  cartItems: [],
  addToCart: () => { },
  removeToCart: () => { }
};

const CartStateContext = createContext<CartContextState>(contextDefaultValues);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = React.useState<ICart[]>(getCart())
  const addToCart=(item:ICart) => {
    setCartItems(addCart(item))
  }
  const removeToCart=() => {
    setCartItems(removeCart)
  }
  return (
    <CartStateContext.Provider value={{ cartItems, addToCart, removeToCart }}>
      {children}
    </CartStateContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
