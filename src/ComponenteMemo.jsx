import React from 'react'

const ComponenteMemo = () => {
console.log('se esta ejecutando ComponenteMemo');
  return (
    <div>ComponenteMemo</div>
  )
}

export default React.memo(ComponenteMemo);