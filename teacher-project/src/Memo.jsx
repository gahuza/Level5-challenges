import React, { useState, useMemo } from "react";

function factorial(n) {
  console.log("Calculating factorial...");
  return n <= 0 ? 1 : n * factorial(n - 1);
}

function Memo() {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  // Memoize the factorial result
  const fact = useMemo(() => factorial(number), [number]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Factorial of {number} is {fact}</h2>
      <button onClick={() => setNumber(number + 1)}>Increase Number</button>
      <br /><br />
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
    </div>
  );
}

export default Memo;
