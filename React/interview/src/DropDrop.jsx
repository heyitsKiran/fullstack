//Under Construction

import React, { useEffect } from "react";
import { useState } from "react";

const DropDrop = () => {
  //Data
  const countries = [
    {
      id: "1",
      name: "India",
      state: [
        {
          id: "1",
          name: "Karnataka",
          cities: ["Bengaluru", "Kolar", "Mysore", "KGF"],
        },
        {
          id: "2",
          name: "TamilNadu",
          cities: ["Chennai", "Coimbatore", "Pondicherry", "Kanyakumari"],
        },
        {
          id: "3",
          name: "Kerala",
          cities: ["Kochi", "Tiruvanathapuram", "Kozhikode", "Kannur"],
        },
      ],
    },
    {
      id: "2",
      name: "USA",
      state: [
        {
          id: "1",
          name: "California",
          cities: ["ohio", "virginia", "new york", "baltimore"],
        },
        {
          id: "2",
          name: "Texas",
          cities: ["miami", "sandiego", "washingtonDC"],
        },
        {
          id: "3",
          name: "Florida",
          cities: ["New Jersey", "Georgia", "Hawaii", "Arizona"],
        },
      ],
    },
  ];

  //useState Hooks

  const [country, setCountry] = useState([]);
  const [states, setStates] = useState("");

  useEffect(() => {
    setCountry(countries);
    setStates(countries.state);
  }, []);

  return (
    <div className="container">
      <div className="bg-dark text-white">
        <h1 className="text-center">Select the Location</h1>
      </div>

      {/* Country */}
      <select className="form-control">
        <option>-- Select Country --</option>
        {country &&
          countries.map((ctr, index) => (
            <option key={index} value={ctr.id}>
              {ctr.name}
            </option>
          ))}
      </select>

      <br />

      {/* State */}
      <select className="form-control">
        <option>--Select State--</option>
        {states &&
          countries.state.map((str, index) => (
            <option key={index} value={str.id}>
              {str.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default DropDrop;
