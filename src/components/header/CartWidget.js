import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CustomContext } from "../../context/CustomContext";

export const CartWidget = () => {
  const { totals } = useContext(CustomContext);
  return (
    <div style={{ display: "flex" }}>
      <ShoppingCartIcon color="primary" fontSize="large" />
      {totals.qty > 0 && <p>{totals.qty}</p>}
    </div>
  );
};

export default CartWidget;
