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
