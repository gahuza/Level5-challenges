import React from "react";

class unMount extends React.Component {
  componentWillUnmount() {
    console.log("Component unmounted!");
  }

  render() {
    return <h3>Hello, React!</h3>;
  }
}

export default unMount;
