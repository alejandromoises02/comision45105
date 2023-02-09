import React, {useState} from "react";
import Navbar from "./components/header/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import ComponenteDeEstados from './ComponenteDeEstados'

const App = () => {

  const [show, setShow] = useState(true);

  const userName = "Alejandro";
  const greeting = 'Gracias por quedarse hasta los postcreditos';


  return (
    <>
      <Navbar name={userName} />
      <ItemListContainer greeting={greeting}/>
      {/*show ? <ComponenteDeEstados /> : <h1>No hay nada</h1>
      <button onClick={()=>{setShow(!show)}}>Alternar</button>*/}
    </>
  );
};

export default App;




