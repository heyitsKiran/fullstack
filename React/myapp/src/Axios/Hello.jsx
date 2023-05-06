import Axios from "axios";
import React, { useState } from "react";

const Hello = () => {
  let [detail, setDetail] = useState("");

  Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    setDetail(response.name, response.email, response.phone, response.company);
  });

  let displayData = (response) => {
    setDetail(detail.response);
  };

  return (
    <div>
      <div className="container">
        <div className="card ">
          <div>
            <button className="btn btn-success" onClick={displayData}>
              Get Details
            </button>
            <div className="table my-3">
              <div className="table-head">
                <tr>
                  <td>NAME</td>
                  <td>EMAIL</td>
                  <td>PHONE</td>
                  <td>COMPANY</td>
                </tr>
                <div className="table-body">
                  <tr>
                    <td>{displayData}</td>
                  </tr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hello;
