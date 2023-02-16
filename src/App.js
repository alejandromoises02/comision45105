import React from "react";
import Navbar from "./components/header/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import Cart from "./containers/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const userName = "Alejandro";
  const greeting = "Las Mejores Ofertas";

  return (
    <>
      <BrowserRouter>
        <Navbar name={userName} />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={greeting} />} />

          <Route
            path="/categories/:name"
            element={<ItemListContainer greeting={greeting} />}
          />

          <Route
            path="/product/:id"
            element={<ItemDetailContainer greeting={greeting} />}
          />

          <Route path="/cart" element={<Cart />} />


        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

