import React, { useContext } from "react";
import { CustomContext } from "../context/CustomContext";

const Cart = () => {
  const { cart } = useContext(CustomContext);
  return (
    <div>
      {cart.map((product) => {
        return <h1 key={product.id}>{product.title}</h1>;
      })}
    </div>
  );
};

export default Cart;
