import React from "react";
import { useState } from "react";

const Calculator = () => {
  //Hook For Input Value
  const [value, setValue] = useState("");

  //Handler for Input Value
  const clickHandler = (e) => {
    setValue(value.concat(e.target.name));
    e.preventDefault();
  };

  //Handler for All Clear
  const clearHandler = (e) => {
    setValue("");
    e.preventDefault();
  };

  //Handler for Backspace
  const Backspace = (e) => {
    setValue(value.slice(0, -1));
    e.preventDefault();
  };

  //Evaluation Handler
  const evaluate = (e) => {
    setValue(eval(value));
    e.preventDefault();
  };

  return (
    <div className="container text-center mt-5">
      <div className="heading">
        <h1>Calculator</h1>
      </div>
      <div>
        <form>
          <h3>
            <input type="text" value={value} />

            <br />
            <br />

            <button onClick={clearHandler}>Cl</button>
            <button onClick={Backspace}>C</button>

            <br />

            <button name="7" onClick={clickHandler}>
              7
            </button>
            <button name="8" onClick={clickHandler}>
              8
            </button>
            <button name="9" onClick={clickHandler}>
              9
            </button>
            <button name="/" onClick={clickHandler}>
              /
            </button>

            <br />

            <button name="4" onClick={clickHandler}>
              4
            </button>
            <button name="5" onClick={clickHandler}>
              5
            </button>
            <button name="6" onClick={clickHandler}>
              6
            </button>
            <button name="*" onClick={clickHandler}>
              *
            </button>

            <br />

            <button name="1" onClick={clickHandler}>
              1
            </button>
            <button name="2" onClick={clickHandler}>
              2
            </button>
            <button name="3" onClick={clickHandler}>
              3
            </button>
            <button name="&ndash;" onClick={clickHandler}>
              -
            </button>

            <br />

            <button name="0" onClick={clickHandler}>
              0
            </button>
            <button name="." onClick={clickHandler}>
              .
            </button>
            <button name="+" onClick={clickHandler}>
              +
            </button>
            <button onClick={evaluate}>=</button>
          </h3>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
