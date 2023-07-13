//Class Component

// import React, { Component } from "react";

// class Form extends Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   mailHandler = (event) => {
//     this.setState({ email: event.target.value });
//   };

//   passwordHandler = (event) => {
//     this.setState({ password: event.target.value });
//   };

//   submitHandler = (event) => {
//     event.preventDefault();
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div>
//         <pre>{JSON.stringify(this.state)}</pre>
//         <form onSubmit={this.submitHandler}>
//           <br />
//           <label>Email</label>
//           <input
//             type="text"
//             placeholder="Enter vaild Email id"
//             onChange={this.mailHandler}
//           />
//           <br />
//           <br />
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter Strong password"
//             onChange={this.passwordHandler}
//           />
//           <br />
//           <br />
//           <input type="submit" value="Login..." />
//         </form>
//       </div>
//     );
//   }
// }

// export default Form;

//***************************************************************************************** */

//Functional Component

import React, { useState } from "react";

const Form = () => {
  const [update, setUpdate] = useState({ email: "", password: "" });

  let emailHandler = (event) => {
    setUpdate({ email: event.target.value });
  };
  let passwordHandler = (event) => {
    setUpdate({ password: event.target.value });
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <pre>{JSON.stringify(update)}</pre>
      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Valid Email"
          value={update.email}
          onChange={emailHandler}
        />
      </div>
      <br />
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Valid password"
          value={update.password}
          onChange={passwordHandler}
        />
      </div>
      <br />
      <button>Login</button>
    </div>
  );
};

export default Form;
