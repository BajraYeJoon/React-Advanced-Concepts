import React, { useReducer } from "react";

// this is for single and two usereducer .for the minimal code, multiple usereducers are used
const initialState = {
  firstCounter: 0,
  secondCounter: 50,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };

    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };

    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };

    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;

    default:
      return state;
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>firstcount - {count.firstCounter}</h1>
      <h1>seconCount - {count.secondCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 3 })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "increment", value: 7 })}>
        Increment 7
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>

      <button onClick={() => dispatch({ type: "increment2", value: 7 })}>
        Increment2 7
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 5 })}>
        Decrement2 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default UseReducer;
