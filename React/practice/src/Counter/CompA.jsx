import React from "react";
import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <div className="container">
        <div className="card text-center">
          <div className="card-body">
            <h1>Counter</h1>
            <div className="my-5">
              <h1>{count}</h1>
              <button className="btn btn-success mx-3" onClick={()=>{setCount(count+1)}}>Increment</button>
              <button className="btn btn-success mx-3" onClick={()=>{setCount(count-1)}} disabled={count===0}>Decrement</button>
              <button className="btn btn-success mx-3" onClick={()=>{setCount(0)}} disabled={count===0}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Counter;
