import React from "react";

const GreetingButton = () => {
  function handleClick(name) {
    alert(`Hello, ${name}!`);
  }

  return (
    <div>
      <h3>Passing Arguments using Arrow Function</h3>
      <button onClick={() => handleClick("Jean de Dieu")}>
        Say Hello
      </button>
      <button onClick={() => handleClick("Visitor")}>
        Say Hello to Visitor
      </button>
      <button onClick={() => handleClick("Jean", 25)}>Click Me</button>

    </div>
  );
};

export default GreetingButton;
