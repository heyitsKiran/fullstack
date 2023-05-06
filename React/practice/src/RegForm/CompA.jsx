import React, { useState } from "react";

let Registration = () => {
  let [enter, setEnter] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //onChange Handler
  let enterHandler = (event) => {
    setEnter(event.target.value);
  };

  return (
    <div>
      <div className="container card my-4">
        <div className="form">
          <div>
            <input
              value={enter.firstName}
              onChange={enterHandler}
              type="text"
              placeholder="First Name"
            />
          </div>
          <br />
          <div>
            <input
              value={enter.lastName}
              onChange={enterHandler}
              type="text"
              placeholder="Last Name"
            />
          </div>
          <br />
          <div>
            <input
              value={enter.phone}
              onChange={enterHandler}
              type="number"
              placeholder="Phone"
            />
          </div>
          <br />
          <div>
            <input
              value={enter.email}
              onChange={enterHandler}
              type="email"
              placeholder="Email"
            />
          </div>
          <br />
          <div>
            <input
              value={enter.password}
              onChange={enterHandler}
              type="text"
              placeholder="Password"
            />
          </div>
          <br />
          <div>
            <input
              value={enter.confirmPassword}
              onChange={enterHandler}
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
