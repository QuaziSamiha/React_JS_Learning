import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="border border-red-500 w-96 h-28">
        <h1 className="my-3 text-center"> Count - {count}</h1>
        <div className="flex justify-evenly gap-6 my-3">
          <button onClick={() => dispatch("increment")}>Increment</button>
          <button onClick={() => dispatch("decrement")}>Decrement</button>
          <button onClick={() => dispatch("reset")}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
