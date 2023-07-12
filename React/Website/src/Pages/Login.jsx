import React, { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const dataHandler = (e) => {
    let { name, value } = e.target;
    setData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  let submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="container mt-3">
      <form onSubmit={submitHandler}>
        <div className="form">
          <label>
            <h4>Username</h4>
          </label>
          <input
            type="text"
            name="username"
            placeholder=""
            onChange={dataHandler}
          />
          <br />
          <label>
            <h4>Password</h4>
          </label>
          <input
            type="text"
            name="password"
            placeholder=""
            onChange={dataHandler}
          />
          <br />
          <button className="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
