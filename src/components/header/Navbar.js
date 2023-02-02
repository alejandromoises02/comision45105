import React from "react";
import logo from "../../assets/tienda.png";
import { styles } from "./Navbar.style";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavCategories from "./NavCategories";

const Navbar = ({ name }) => {
  return (
    <header style={styles.container}>
      <a style={styles.imagenes} href="">
        <img style={styles.imagenes} src={logo} alt="tienda online" />
      </a>
      <h1>Bienvenido {name}</h1>

      <NavCategories />

      <ShoppingCartIcon color="primary" fontSize="large" />
    </header>
  );
};

export default Navbar;
