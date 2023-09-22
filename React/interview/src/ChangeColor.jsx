import React, { useState } from "react";

const ChangeColor = () => {
  
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  //Condition for Colour Change
  const textColour = isClicked ? "red" : "green";

  return (
    <div className="container text-center mt-5">
      <h1>Click the word to change the Colour</h1>
      <br />
      <h1 style={{ color: textColour }} onClick={clickHandler}>
        Hello
      </h1>
    </div>
  );
};

export default ChangeColor;
