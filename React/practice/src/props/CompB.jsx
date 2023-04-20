import React from "react";

function CompB(props) {
  return (
    <div>
      <h1>Component B</h1>
      <pre>{JSON.stringify(props)}</pre>
      <h5>Property 1 : {props.prop1} </h5>
      <h5>Property 2 : {props.prop2} </h5>
    </div>
  );
}
export default CompB;
