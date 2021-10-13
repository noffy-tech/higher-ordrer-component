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
