import React from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
import UserGreeting from "./UserGreeting";
import UserMsg from "./UserMsg";

function QuizArea(props) {
  if (props.isFinished) {
    if (props.correct >= 2) {
      return <UserGreeting />;
    } else {
      return <UserMsg />;
    }
  }

  return (
    <div>
      <Question dataSet={props.dataSet} />
      <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
    </div>
  );
}

export default QuizArea;
