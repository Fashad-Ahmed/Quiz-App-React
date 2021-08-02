import React from "react";

function TotalIncorrect(props) {
  return <h3 className="incorrectAns">Incorrect: {props.incorrect}</h3>;
}

export default TotalIncorrect;
