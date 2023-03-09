import React from 'react'

const BotonAumentar = ({sumar}) => {
    console.log('se esta ejecutando BotonAumentar');
  return (
    <button onClick={sumar}>sumar</button>
  )
}

export default BotonAumentar