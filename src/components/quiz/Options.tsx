import React, { Dispatch } from "react";
import { QuestionType } from "../../models/QuestionType";

interface Props {
  question: QuestionType;
  dispatch: Dispatch<any>;
  answer: any;
}

function Options({ question, dispatch, answer }: Props) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
                : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
