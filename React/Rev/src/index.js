import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
// ReactDOM.render(<App />, document.getElementById("root"))

// New method to Root DOM - 1
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


// New method of DOM into Root - 2
/* const root = ReactDOM.createRoot(
    document.getElementById('root')
);
const element = <App />;
root.render(element);
 */

// Alternative method - 3
/* const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = <App />;
  root.render(element);
} */

/* setInterval(tick, 1); */