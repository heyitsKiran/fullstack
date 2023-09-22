import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container text-center">
      <div className="heading">
        <h1>Counter</h1>
      </div>
      <div className="button">
        <h1>
          <button onClick={decrement}>-</button>
          {count}
          <button onClick={increment}>+</button>
        </h1>
      </div>
    </div>
  );
};

export default Counter;
