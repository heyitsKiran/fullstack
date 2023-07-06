import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const dataHandler = (e) => {
    const { name, value } = e.target;
    setInput((previousVal) => {
      return { ...previousVal, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form className="form mx-auto" onSubmit={submitHandler}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input
              name="firstName"
              required=""
              placeholder=""
              type="text"
              className="input"
              onChange={dataHandler}
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              name="lastName"
              required=""
              placeholder=""
              type="text"
              className="input"
              onChange={dataHandler}
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            name="email"
            required=""
            placeholder=""
            type="email"
            className="input"
            onChange={dataHandler}
          />
          <span>Email</span>
        </label>

        <label>
          <input
            name="password"
            required=""
            placeholder=""
            type="password"
            className="input"
            onChange={dataHandler}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            name="confirmPassword"
            required=""
            placeholder=""
            type="password"
            className="input"
            onChange={dataHandler}
          />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an acount ? <a href="/login">Signin</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
