import React, { Dispatch, useEffect } from "react";

interface Props {
  dispatch: Dispatch<any>;
  secondsRemaining: number;
}

function Timer({ dispatch, secondsRemaining }: Props) {
    const mins = Math.floor(secondsRemaining / 60)
    const seconds = secondsRemaining % 60

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return <div className="timer">
    {mins < 10 && "0"}
    {mins}:
    {seconds < 10 && "0"}
    {seconds}</div>;
}

export default Timer;
