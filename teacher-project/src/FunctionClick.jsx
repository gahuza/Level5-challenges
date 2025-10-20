import React from 'react'

const FunctionClick = () => {

  function handleClick() {
    console.log('clicked well');
  }

  return (
    <div>
      <button onTouchStart={handleClick}>Click Button</button>
    </div>
  )
}

export default FunctionClick
