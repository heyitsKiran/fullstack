import React, { useEffect, useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [isError, setIsError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const dataHandler = (e) => {
    let { name, value } = e.target;
    setData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsError(validate(data));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(isError);
    if (Object.keys(isError).length === 0 && isSubmit) {
      console.log(data);
    }
  }, [isError]);

  const validate = (values) => {
    let errors = {};

    if (!values.username) {
      errors.username = "Please enter a valid Username";
    }
    if (!values.password) {
      errors.password = "Please Enter a Authenticated Password";
    }
    return errors;
  };

  return (
    <div className="container mt-3">
      <div className="header">
        <h1>Login</h1>
      </div>
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

          <p>
            <h3 className="bg-danger">{isError.username}</h3>
          </p>

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
          <p>
            <h3 className="bg-danger">{isError.password}</h3>
          </p>

          <br />
          <button className="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
