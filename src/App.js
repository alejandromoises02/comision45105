import React from "react";
import Navbar from "./components/header/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ComponenteDeEstados from './ComponenteDeEstados'
import Users from './Users'

const App = () => {

  const userName = "Alejandro";
  const greeting = 'Gracias por quedarse hasta los postcreditos';

  const unMensaje = (mensaje) => {
    console.log(mensaje);
  }

  return (
    <>
      <Navbar name={userName} />
      <ItemListContainer greeting={greeting}/>
      <ComponenteDeEstados mensaje={unMensaje} />
      <Users />
    </>
  );
};

export default App;
