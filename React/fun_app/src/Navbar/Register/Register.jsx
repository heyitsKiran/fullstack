import React, { useEffect, useState } from "react";
import "./Register.css";

const Register = () => {
  // ************************************** HOOKS *************************************
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [verifyErrors, setVerifyErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // ************************************** Handlers *************************************

  const dataHandler = (e) => {
    const { name, value } = e.target;
    setInput((previousVal) => {
      return { ...previousVal, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setVerifyErrors(validate(input));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(verifyErrors);
    if (Object.keys(verifyErrors).length === 0 && isSubmit) {
      console.log(input);
    }
  }, [verifyErrors]);

  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "Please enter your First Name";
    }
    if (!values.lastName) {
      errors.lastName = "Please enter your Last Name";
    }
    if (!values.email) {
      errors.email = "Please enter your Email";
    }
    if (!values.password) {
      errors.password = "Please enter Password";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Please enter Confirm Password";
    }
    return errors;
  };

  return (
    <div>
      <form className="form mx-auto" onSubmit={submitHandler}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          {/* ************************************** First Name ************************************* */}
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
          </label>{" "}
          <br />
          <p className="text-danger">{verifyErrors.firstName}</p>
          {/* ************************************** Last Name ************************************* */}
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
        <p className="text-danger">{verifyErrors.lastName}</p>

        {/* ************************************** Email ************************************* */}

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
        <p className="text-danger">{verifyErrors.email}</p>

        {/* ************************************** Password ************************************* */}

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
        <p className="text-danger">{verifyErrors.password}</p>

        {/* ************************************** Confirm Password ************************************* */}

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
        <p className="text-danger">{verifyErrors.confirmPassword}</p>

        <button className="submit">Submit</button>
        <p className="signin">
          Already have an account ? <a href="/login">Sign in</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default Register;
