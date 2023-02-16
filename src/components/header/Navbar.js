import React from "react";
import logo from "../../assets/tienda.png";
import { styles } from "./Navbar.style";
import NavCategories from "./NavCategories";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
  return (
    <header style={styles.container}>
      <Link style={styles.imagenes} to={"/"}>
        <img style={styles.imagenes} src={logo} alt="tienda online" />
      </Link>
      <h1>Bienvenido {name}</h1>
      <NavCategories />
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </header>
  );
};

export default Navbar;
