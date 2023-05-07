//Axios using promises and Functional Component

// import axios from "axios";
// import React, { useEffect } from "react";

// const One = () => {
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => console.log(response.data));
//   }, []);
//   return <div>Axios using Promises</div>;
// };

// export default One;

//******************************************************************************************** */

// Axios using hooks and iterating them

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const One = () => {
  let [myData, setMyData] = useState([]);
  let [isError, setIsError] = useState(""); // NOTE : Error Handling useState

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => setMyData(response.data))
  //     .catch((error) => setIsError(error.message)); // NOTE : Error Handling
  // }, []);

  // NOTE :  Async Await
  let getData = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.cm/users");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container bg-primary">
      <h1 className="text-center my-3">Axios using Hooks</h1>
      {isError !== "" && <h2 className="text-center text-danger">{isError}</h2>}
      <div className="card">
        {myData.map((user) => {
          const { id, name, email, username } = user;
          return (
            <div className="card text-center bg-light" key={id}>
              <h2>{name}</h2>
              <h5>
                <p>
                  ID : {id}
                  <br />
                  Email : {email}
                  <br />
                  Username : {username}
                </p>
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default One;
