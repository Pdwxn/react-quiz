import React, { Dispatch } from "react";

interface Props {
  index: number;
  dispatch: Dispatch<any>;
  answer: any;
  numQuestions: number;
}

function NextButton({ index, dispatch, answer, numQuestions }: Props) {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );

  return null;
}

export default NextButton;
