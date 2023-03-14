import React, { useContext } from "react";
import { CustomContext } from "../context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Cart = ({ isRed, estilo }) => {
  const { cart, totals } = useContext(CustomContext);

  const buyer = {
    name: "Juan",
    apellido: "Perez",
    email: "juanperez@gmail.com",
  };

  const handlerClickSell = () => {
    const sellCollection = collection(db, "sells");
    addDoc(
      sellCollection,
      {
        buyer,
        items: cart,
        total: totals.total,
        time: serverTimestamp(),
      }
    )
    .then(result=>console.log(result.id))
  };

  const handlerStock = () => {
    const docReference = doc(db, 'products', '7dKvIMyRTeFJg5w62m4F');
    updateDoc(docReference, {stock:50})
  };


  return (
    <>
      {!cart.length ? (
        <>
          <h1 className={isRed ? "rojo" : "azul"}>
            No hay productos agregados, puedes verlos <Link to={"/"}>aca</Link>
          </h1>
          <h2 className={`tamanio ${estilo || ""}`}>Gracias por tu visita</h2>
        </>
      ) : (
        <>
          <div>
            {cart.map((product) => {
              return (
                <div key={product.id}>
                  <h1>{product.title}</h1>
                  <h2>Precio: {product.price}</h2>
                  <h2>Cantidad: {product.quantity}</h2>
                </div>
              );
            })}
          </div>
          <h1>Total : {totals.total}</h1>
          <button onClick={handlerStock}>Comprar</button>
        </>
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
