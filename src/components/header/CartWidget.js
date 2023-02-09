import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartWidget = () => {
  return (
    <div style={{display:'flex'}}>
      <ShoppingCartIcon color="primary" fontSize="large" />
      <p>4</p>
    </div>
  );
};

export default CartWidget;
