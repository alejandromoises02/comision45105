import { style } from "@mui/system";

const ItemDetail = ({ product }) => {
  return (
    <div style={styles.container}>
      <img alt={product.title} src={product.image} style={styles.image} />
      <div>
        <h1>{product.title}</h1>
        <span>{product.description}</span>
        <h2>{product.price}</h2>
      </div>
    </div>
  );
};

export default ItemDetail;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "20%",
  },
};
