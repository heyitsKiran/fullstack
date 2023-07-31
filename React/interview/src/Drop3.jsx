import React, { useState } from "react";

const countryArrays = [
  {
    country: "India",
    value: "In",
    cities: ["Telangana", "AndhraPradesh", "Rajasthan", "Maharashtra"],
  },
  {
    country: "Pakistan",
    value: "Pak",
    cities: ["Pak-One", "Pak-Two", "Pak-Three"],
  },
];

const [hey,setHey]=useState({countryArrays})

const Drop3 = () => {
  return <div>
    <select value={hey}>
        {
            countryArrays.map((abc)=><option value="">{abc.country}</option>)
        }
    </select>
  </div>;
};

export default Drop3;
