import React, { useState, useEffect } from "react";

const ComponenteDeEstados = () => {
  const [count, setCount] = useState(1);
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    //console.log("montaje y actualizacion");
    setNumero(numero + 1);

    /*setTimeout(()=>{
      console.log('mensaje en el time out');
    },2000);*/

    const interval = setInterval(() => {
      console.log('ping');
    }, 1000);

    return (()=>{
      clearInterval(interval);
    })

  },[]);
  
  //console.log("constructor");

  const handlerAdd = () => {
    setCount(count + 1);
  };

  const handlerSubtract = () => {
    setCount(count - 1);
  };
  const handlerReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handlerAdd}>Sumar</button>
      <button onClick={handlerSubtract}>Restar</button>
      <button onClick={handlerReset}>Reset</button>
      <h1>{numero}</h1>
    </>
  );
};

export default ComponenteDeEstados;
