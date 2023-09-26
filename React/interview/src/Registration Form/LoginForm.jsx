import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  const dataHandler = (e) => {
    let { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log(data);
  };

  return (
    <div className="container">
      <form class="form text-center" onClick={submitHandler}>
        <p class="title">Register </p>
        <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
          <label>
            <input
              name="firstName"
              required=""
              placeholder=""
              type="text"
              class="input"
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
              class="input"
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
            class="input"
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
            class="input"
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
            class="input"
            onChange={dataHandler}
          />
          <span>Confirm password</span>
        </label>

        <button class="submit">Submit</button>
        <p class="signin">
          Already have an account ? <a href="#">Sign in</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
