import axios from "axios";
import React, { useEffect, useState } from "react";

const FetchMap = () => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    let value = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setDetail(response.data))
        .catch((err) => console.log(err));
    };
    value();
  }, []);

  return (
    <div>
      <h1 className="text-center">Employees</h1>
      <div>
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          {detail &&
            detail.map((ele) => (
              <tbody>
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.username}</td>
                  <td>{ele.email}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};

export default FetchMap;


