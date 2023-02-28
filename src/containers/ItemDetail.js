import React, { useState, useContext } from "react";
import ItemCount from "../components/ItemCount";
import { Link } from "react-router-dom";
import { CustomContext } from "../context/CustomContext";

const ItemDetail = ({ product }) => {
  const [isPressedButton, setIsPressedButton] = useState(false);
  const { addProduct } = useContext(CustomContext);

  const onAdd = (count) => {
    setIsPressedButton(true);
    addProduct(product, count);
  };

  return (
    <div style={styles.infoContainer}>
      <img style={styles.img} src={product.image} alt={product.title} />
      <div style={styles.infoTextContainer}>
        <div style={styles.infoText}>
          <h1>{product.title}</h1>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>

        {isPressedButton ? (
          <Link to="/cart">
            <button>Finalizar compra</button>
          </Link>
        ) : (
          <ItemCount onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

const styles = {
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "40%",
    aspectRatio: "1/1",
  },
  infoTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  infoText: {
    padding: "10px",
    marging: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
};

export default ItemDetail;
