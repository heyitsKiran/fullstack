import axios from "axios";
import React, { useState } from "react";

const FetchClick = () => {
  const [detail, setDetail] = useState([]);

  const fetchHandle = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data;
      setDetail(data);
    } catch (error) {
      console.log("error...", error);
    }
  };

  return (
    <div>
      <h1 className="text-center">FetchClick</h1>
      <div>
        <div className="centered-button">
        <button onClick={fetchHandle}>Click</button>
        </div>
        {detail &&
          detail.map((emp) => (
            <table className="table">
              <tr>{emp.id}</tr>
              <tr>{emp.name}</tr>
              <tr>{emp.username}</tr>
              <tr>{emp.email}</tr>
            </table>
          ))}
      </div>
    </div>
  );
};

export default FetchClick;

//******************************************************************************************************** */

// import {useState} from 'react';

// const FetchClick = () => {
//   const [data, setData] = useState({data: []});
//   const [isLoading, setIsLoading] = useState(false);
//   const [err, setErr] = useState('');

//   const handleClick = async () => {
//     setIsLoading(true);

//     try {
//       const response = await fetch('https://reqres.in/api/users', {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Error! status: ${response.status}`);
//       }

//       const result = await response.json();

//       console.log('result is: ', JSON.stringify(result, null, 4));

//       setData(result);
//     } catch (err) {
//       setErr(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   console.log(data);

//   return (
//     <div>
//       {err && <h2>{err}</h2>}

//       <button onClick={handleClick}>Fetch data</button>

//       {isLoading && <h2>Loading...</h2>}

//       {data.data.map(person => {
//         return (
//           <div key={person.id}>
//             <h2>{person.email}</h2>
//             <h2>{person.first_name}</h2>
//             <h2>{person.last_name}</h2>
//             <br />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default FetchClick;
