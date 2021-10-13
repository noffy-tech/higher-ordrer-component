# Higher-Order-Component

A higher-order component is a function that takes a component and returns a new component. A higher-order component (HOC) is the advanced technique in React.js for reusing a component logic. Higher-Order Components are not part of the React API. They are the pattern that emerges from React’s compositional nature. The component transforms props into UI, and a higher-order component converts a component into another component.

# To create higher order component

- create a common folder, inside the common folder create the HOC folder (higher order component).
- create the inside the HOC HOC.jsx


```
import React from "react";
// This is Higher Order component
function HOC({ Component, backgroundColor }) {
  const divStyle = {
    backgroundColor: backgroundColor,
    width: "200px",
    textAlign: "center",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div style={divStyle}>
      <Component />
    </div>
  );
}

export default HOC;
```

- replace the App.js with below code.

```
import React, { useState } from "react";
import HOC from "./Common/HOC"; // Higher Order Component

function App() {
  const divStyle = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <div style={divStyle}>
      <HOC Component={Counter} backgroundColor="#17a2b8" />
      <HOC Component={Counter} backgroundColor="#6c757d" />
      <HOC Component={Counter} backgroundColor="#28a745" />
      <HOC Component={Counter} backgroundColor="#343a40" />
    </div>
  );
}
// Counter Component
function Counter() {
  const [count, setCount] = useState(0);
  const divStyle = {
    color: "#fff",
    backgroundColor: "#007bff",
    borderColor: "#007bff",
    borderRadius: ".25rem",
  };
  return (
    <div>
      <h5 style={{ color: "#fff" }}>Count : {count}</h5>
      <button onClick={() => setCount(count + 1)} style={divStyle}>
        Click Me
      </button>
    </div>
  );
}
export default App;
```
