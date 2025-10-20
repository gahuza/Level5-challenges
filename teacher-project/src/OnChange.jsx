import React, { useState } from 'react'

const OnChangeExample = () => {
  const [namee, setName] = useState('') // state to store input value

  const handleChange = (event) => {
    setName(event.target.value) // update state with new input value
  }

  return (
    <div>
      <h3>React onChange Example</h3>
      <input 
        type="text" placeholder="Enter your name"value={namee} 
        onChange={handleChange} // event listener
      />
      <p>Your name is: {namee}</p>
    </div>
  )
}

export default OnChangeExample
