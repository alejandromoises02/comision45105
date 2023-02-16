import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

/*const initialProducts = [
  { name: "manzana", id: 0, price: 500, stock: 10 },
  { name: "pera", id: 1, price: 200, stock: 20 },
  { name: "maracuya", id: 2, price: 100, stock: 15 },
];*/

/*const queryProducts = new Promise((res, rej) => {
  setTimeout(() => {
    res(initialProducts);
  }, 3000);
  //rej("hay un error");
});*/

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { name } = useParams();
  const URL = `https://fakestoreapi.com/products/category/${name}`;
  //`https://fakestoreapi.com/products/category/${name}`
  //'https://fakestoreapi.com/products'

  useEffect(() => {
    /*queryProducts
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });*/

    /*fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((e) => {
        console.log(e);
      });*/

    const getProducts = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    getProducts();
  }, [name]);

  const onAdd = (count) => {
    console.log(`el usuario selecciono ${count} `);
  };

  return (
    <>
      <h1>{greeting}</h1>
      {!error ? (
        <>
          {products.length ? (
            <ItemList products={products} />
          ) : (
            <h1>Cargando...</h1>
          )}
        </>
      ) : (
        <h1>Hubo un error</h1>
      )}
    </>
  );
};

export default ItemListContainer;
