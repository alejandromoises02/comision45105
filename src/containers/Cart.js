import React, { useContext } from "react";
import { CustomContext } from "../context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ isRed, estilo }) => {
  const { cart } = useContext(CustomContext);

  return (
    <>
      {!cart.length ? (
        <>
          <h1 className={isRed ? "rojo" : "azul"}>
            No hay productos agregados, puedes verlos <Link to={"/"}>aca</Link>
          </h1>
          <h2 className={`tamanio ${estilo || ''}`}>Gracias por tu visita</h2>
        </>
      ) : (
        <div>
          {cart.map((product) => {
            return <h1 key={product.id}>{product.title}</h1>;
          })}
        </div>
      )}
    </>
  );
};

export default Cart;

/*  if (!cart.length) {
    return (
      <h1>
        No hay peoductos agregados, puedes verlos <Link to={"/"}>aca</Link>
      </h1>
    );
  }
  return (
    <div>
      {cart.map((product) => {
        return <h1 key={product.id}>{product.title}</h1>;
      })}
    </div>
  );*/
