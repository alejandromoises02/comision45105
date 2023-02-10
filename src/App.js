import React from "react";
import Navbar from "./components/header/Navbar";
import ItemListContainer from "./containers/ItemListContainer";

const App = () => {
  const userName = "Alejandro";
  const greeting = 'Gracias por quedarse hasta los postcreditos';

  return (
    <>
      <Navbar name={userName} />
      <ItemListContainer greeting={greeting}/>
    </>
  );
};

export default App;




