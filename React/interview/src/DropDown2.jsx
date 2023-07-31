import React, { useState } from "react";

let bfc = ["Chhetri", "Siva", "GurpreetSandhu", "Roshan"];
// let kbfc = ["Sahal", "Nishu", "Khabra", "Luna"];
// let mbsg = ["Liston", "Hugo", "Manvir", "Petratos"];

let clubs = ["bfc", "kbfc", "mbsg", "rcb", "csk", "mi"];

let rcb = ["Kholi", "ABD", "Gayle", "FAf"];
// let csk = ["Dhoni", "Chahar", "Bravo", "Jadeja"];
// let mi = ["Sachin", "Rohit", "Kieren", "Pandya"];

// {bfc.map((bengaluru) => <option>{bengaluru}</option>)}
// {rcb.map((bangalore) => <option>{bangalore}</option>)}

const DropDown2 = () => {
  const drop1 = () => {
    <select>
      {bfc.map((benki) => (
        <option>{benki}</option>
      ))}
    </select>;
  };
  const drop2 = () => {
    <select>
      {rcb.map((benki) => (
        <option>{benki}</option>
      ))}
    </select>;
  };

  const choice = () => {
    if (bfc) {
      console.log(drop1);
    }
    if (rcb) {
      console.log(drop2);
    }
  };

  return (
    <div className="card">
      <div>
        <select>
          {clubs.map((club) => (
            <option onClick={choice}>{club}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDown2;
