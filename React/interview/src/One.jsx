import axios from "axios";
import React, { useState } from "react";

const One = () => {
  const [fetch, setFetch] = useState([]);

  const fetchHandler = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data;
      setFetch(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Employee Details</h1>
      <h3>Click to Fetch Details</h3>
      <button className="btn btn-primary" onClick={fetchHandler}>
        Fetch
      </button>
      <div className="table">
        {fetch &&
          fetch.map((emp) => (
            <table>
              <div className="thead">
                <th>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Username</td>
                  <td>Email</td>
                </th>
              </div>
              <div className="tbody">
                <tr>
                  <li>
                    <ul>{emp.id}</ul>
                    <ul>{emp.name}</ul>
                    <ul>{emp.username}</ul>
                    <ul>{emp.email}</ul>
                  </li>
                </tr>
              </div>
            </table>
          ))}
      </div>
    </div>
  );
};

export default One;
