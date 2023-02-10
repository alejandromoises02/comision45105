import React from 'react'

const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };

const Item = ({product}) => {
  return (
    <div style={style.container}>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <img src={product.image} alt={product.title} style={{width:'70%'}} />
    </div>
  )
}

const style = {
    container:{
        width: viewport.width > 900 ? '30%' : '90%',  
    }
}

export default Item