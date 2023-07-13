import React, { useState } from "react";

const Dropdown = () => {
  const [data, setData] = useState("");
  const country = ["India", "SriLanka", "Nepal", "Pakistan"];

  let handler = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="container ms-auto">
      <select value={data} onChange={handler}>
        {
          country.map(opt=><option>{opt}</option>)
        }
      </select>
      <h1>{data}</h1>
    </div>
  );
};

export default Dropdown;

//Chat gpt
// import React, { useState } from 'react';

// const DynamicDropdown = () => {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [dynamicOptions, setDynamicOptions] = useState([]);

//   const handleMainDropdownChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedOption(selectedValue);

//     // Simulating an API call or fetching dynamic options based on the selected value
//     // Replace this code with your actual logic to fetch the dynamic options
//     setTimeout(() => {
//       if (selectedValue === 'option1') {
//         setDynamicOptions(['Dynamic Option 1', 'Dynamic Option 2', 'Dynamic Option 3']);
//       } else if (selectedValue === 'option2') {
//         setDynamicOptions(['Dynamic Option 4', 'Dynamic Option 5', 'Dynamic Option 6']);
//       } else {
//         setDynamicOptions([]);
//       }
//     }, 500);
//   };

//   return (
//     <div>
//       <select value={selectedOption} onChange={handleMainDropdownChange}>
//         <option value="">Select an option</option>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>

//       <select>
//         {dynamicOptions.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default DynamicDropdown;