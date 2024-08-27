import React, { Dispatch } from "react";
import { QuestionType } from "../../models/QuestionType";
import Options from "./Options";

interface Props {
  question: QuestionType;
  dispatch: Dispatch<any>;
  answer: any;
}

function Question({ question, dispatch, answer }: Props) {
  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer}/>
    </div>
  );
}

export default Question;
