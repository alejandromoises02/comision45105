import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {db} from "./../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    const productsCollection = collection(db,'products');
    const q = query(productsCollection, where('category','==','jewelery'));

    getDocs(q).then(
      (data)=>{
        const list = data.docs.map(product => {
          return {
            ...product.data(), 
            id: product.id,
          }
        });
        setProducts(list);
      }
    )
    .catch(()=>{ setError(true);})








    /*const URL = name
      ? `https://fakestoreapi.com/products/category/${name}`
      : "https://fakestoreapi.com/products";
    const getProducts = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    getProducts();*/
  }, [name]);

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
