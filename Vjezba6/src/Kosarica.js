import React from "react";
import Products from "./Products";
import { navigate } from "@reach/router";
import cart from "../components/svg/shopping-cart-solid.svg";
import Details from "./Details";
import { createContext, useState } from "react";

export const CartContext = createContext();

export const Kosarica = (props) => {
  const [artikli, setartikli] = useState([]);

  return (
    <div>
      <CartContext.Provider value={[artikli, setartikli]}>
        {props.children}
      </CartContext.Provider>
    </div>
  );
};
