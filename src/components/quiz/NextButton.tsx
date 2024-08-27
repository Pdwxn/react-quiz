import React, { Dispatch } from "react";

interface Props {
  dispatch: Dispatch<any>;
  answer: any;
}

function NextButton({ dispatch, answer }: Props) {
  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
