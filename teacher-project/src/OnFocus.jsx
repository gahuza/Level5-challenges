import React, { useState } from 'react'

const FocusStyleExample = () => {
  const [isFocusedd, setIsFocusedd] = useState(false)

  const handleFocus = () => setIsFocusedd(true)
  const handleBlur = () => setIsFocusedd(false)

  return (
    <div>
      <h3>Highlight Input on Focus</h3>
      <input
        type="text"
        placeholder="Type something..."
        onFocus={handleFocus}
        onBlur={handleBlur} // triggered when focus is lost
        style={{
          border: isFocusedd ? '2px solid blue' : '1px solid red',
          outline: 'none',
          padding: '8px',
          borderRadius: '5px'
        }}
      />
    </div>
  )
}

export default FocusStyleExample
