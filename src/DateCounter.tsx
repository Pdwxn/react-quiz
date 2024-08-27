import { ChangeEvent, useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state: any, action: any) {
  console.log(state, action);

  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("June 21, 2027");
  date.setDate(date.getDate() + count);

  const dec = () => {
    dispatch({ type: "dec", payload: -1 });
  };

  const inc = () => {
    dispatch({ type: "inc", payload: 1 });
  };

  const defineCount = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default DateCounter;
