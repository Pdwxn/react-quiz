import React from "react";

interface Props {
  index: number;
  points: number;
  answer: any;
  numQuestions: number;
  maxPossiblePoints: number;
}

function Progress({ index, points, numQuestions, maxPossiblePoints, answer }: Props) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;