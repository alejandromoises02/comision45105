import React, { useState } from "react";

const ComponenteDeEstados = ({mensaje}) => {
  const [count, setCount] = useState(1);
  
  const handlerAdd = () => {
    setCount(count + 1);
  };

  const handlerSubtract = () => {
    setCount(count - 1);
  };
  const handlerReset = () => {
    setCount(0);
    mensaje('este mensaje va dsde componente de estados');
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handlerAdd}>Sumar</button>
      <button onClick={handlerSubtract}>Restar</button>
      <button onClick={handlerReset}>Reset</button>
    </>
  );
};

export default ComponenteDeEstados;
