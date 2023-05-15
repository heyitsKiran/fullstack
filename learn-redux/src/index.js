import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//**********************************************************************************************************/

//Understanding a simple increment and decrement

// import { createStore } from "redux";

// //Action
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// //Reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

// //Store
// let store = createStore(counter);

// //To display it in the Console
// store.subscribe(() => {
//   console.log(store.getState());
// });

// //Dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

//************************************************************************************************************************ */
