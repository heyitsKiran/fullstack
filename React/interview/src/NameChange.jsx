import React, { useState } from "react";

const NameChange
 = () => {
  const [change, setChange] = useState("Kiran");

  const click = () => {
    if (change === "Kiran") {
      setChange("Kumar");
    } else {
      setChange("Kiran");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">
        This is{" "}
        <span className="text-danger" onClick={click}>
          {change}
        </span>
      </h1>
    </div>
  );
};

export default NameChange
;
