import { useReducer } from "react";

const initialState = 0;
const reducer =
  (state,
  (action) => {
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
  });

const UseReducer1 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        Count - {count}
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </div>
  );
};

export default UseReducer1;

/**
 * useReducer is a hook that is used for state management
 * it is an alternative to useState hook
 * useReducer is related to reducer functions
 * useReducer(reducer, initialState)
 * reducer(currentState, action)
 * useState is built using useReducer so useReducer is more
 primitive hook campared to useState 
 * when to use useState vs useReducer?

 # hooks so far
 useState --> state
 useEffect --> side effect
 useContext -- context API 
 useReducer --> reducers
 */
