import React from "react";
import CompB from "./CompB";

function CompA() {
  let a = 150;
  let b = 50;

  return (
    <div>
      <h1>Component A</h1>
      <CompB prop1={a} prop2={b} />
    </div>
  );
}
export default CompA;
