import React from "react";
import logo from "../../assets/tienda.png";
import { styles } from "./Navbar.style";
import NavCategories from "./NavCategories";
import CartWidget from "./CartWidget";

const Navbar = ({ name }) => {
  return (
    <header style={styles.container}>
      <a style={styles.imagenes} href="">
        <img style={styles.imagenes} src={logo} alt="tienda online" />
      </a>
      <h1>Bienvenido {name}</h1>

      <NavCategories />

      <CartWidget />
    </header>
  );
};

export default Navbar;
