import React from "react";

const BindExample = () => {
  function handleClick(id) {
    alert(`Hello ${id}`);
  }

  return (
    <div>
      <h3>Passing Arguments Using .bind()</h3>
      <button onClick={handleClick.bind(this,2)}>
        count
      </button>
      {/* <button onClick={handleClick.bind(this, "Visitor")}>
        Greet Visitor
      </button> */}
    </div>
  );
};

export default BindExample;
