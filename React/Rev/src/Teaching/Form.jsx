import React from "react";
import { useState } from "react";

const Form = () => {
  let [qwerty, setQwerty] = useState("");
  let [submit, setSubmit] = useState("");

  let heyHandler = (event) => {
    setQwerty(event.target.value);
  };

  let submitHandler = (e) => {
    setSubmit(qwerty);
    e.preventDefault();
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            placeholder="enter name here"
            onChange={heyHandler}
            value={name}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
