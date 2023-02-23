import React from "react";

const ComponenteEventos = () => {

  const handlerClick = (event) => {
    event.stopPropagation();
    console.log('click en button');
    //console.log(event.target);
  };

  const handlerChange = (event) => {
    console.log(event.target);
    console.dir(event.target);
    console.log(event.target.value);
  };

  const prevenirComportamiento = (e)=>{
    e.preventDefault();
    console.log('comportamiento prevenido');
  }

  const handlerClickDiv = (event) => {
    console.log('click en div');
  };

  return (
    <div onClick={handlerClickDiv}>
      <button id={'idButton'} onClick={handlerClick}>Click</button>
      <input onChange={handlerChange}/>
      <a href="https:www.google.com" onClick={prevenirComportamiento}>ir a google</a>
    </div>
  );
};

export default ComponenteEventos;