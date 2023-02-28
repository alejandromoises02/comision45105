import React, { createContext, useState, useEffect } from "react";

export const CustomContext = createContext();

export const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    let qtyInitial = 0;
    cart.forEach((product) => {
      qtyInitial += product.quantity;
    });
    setQty(qtyInitial);
  }, [cart]);

  const addProduct = (product, quantity) => {
    if (isInCart(product.id)) {
      //TODO
    } else {
      setCart([...cart, { ...product, quantity }]);
      //setQty(qty + quantity)
    }
  };

  const removeProduct = (id) => {
    const product = cart.find((product) => product.id === id);
    setCart(cart.filter((product) => product.id !== id));
    //setQty(qty - product.quantity)
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const clear = () => {
    setCart([]);
    //setQty(0)
  };

  return (
    <CustomContext.Provider value={{ cart, addProduct, removeProduct, clear }}>
      {children}
    </CustomContext.Provider>
  );
};
