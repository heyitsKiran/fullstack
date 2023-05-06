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

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setMyData(response.data));
  }, []);

  return (
    <div>
      Axios using Promises
      <div className="card">
        {myData.map((user) => {
          const { id, name, email, username } = user;
          return (
            <div className="card" key={id}>
              <h2>{name}</h2>
              <p>
                <h5>
                  ID : {id}
                  <br />
                  Email : {email}
                  <br />
                  Username : {username}
                </h5>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default One;
