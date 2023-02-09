import React, { useEffect, useState } from "react";
import Itemcount from "../components/ItemCount";

const initialProducts = [
  { name: "manzana", id: 0, price: 500, stock: 10 },
  { name: "pera", id: 1, price: 200, stock: 20 },
  { name: "maracuya", id: 2, price: 100, stock: 15 },
];

const queryProducts = new Promise((res, rej) => {
  setTimeout(() => {
    res(initialProducts);
  }, 3000);
  //rej("hay un error");
});

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    queryProducts
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onAdd = (count) => {
    console.log(`el usuario selecciono ${count} `);
  };

  return (
    <>
      <h1>{greeting}</h1>
      <Itemcount stock={5} onAdd={onAdd} />

      {products.length ? (
        <>
          {products.map((product) => (
            <h1 key={product.id}>{product.name}</h1>
          ))}
        </>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default ItemListContainer;
