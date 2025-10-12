
import React, { useState, useEffect } from "react";

function DidUpdate() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component updated: count changed!");
  }, [count]); // Runs only when 'count' changes

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default DidUpdate;


// import React from "react";

// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.count !== prevState.count) {
//       console.log("Component updated: count changed!");
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h3>Count: {this.state.count}</h3>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increase
//         </button>
//       </div>
//     );
//   }
// }

// export default DidUpdate;
