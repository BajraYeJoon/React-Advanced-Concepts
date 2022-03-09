import React, { useReducer } from "react";

// this is for single and two usereducer .for the minimal code, multiple usereducers are used
const initialState = {
  firstCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstCounter + action.value };

    case "decrement":
      return {firstCounter: state.firstCounter - action.value };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

function EnhhancedReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
        <div>
      <h1>firstcount - {count.firstCounter}</h1>

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 3 })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>

      <div>
        <h1>seconCount - {countTwo.firstCounter}</h1>

        <button onClick={() => dispatchTwo({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 3 })}>
          Decrement
        </button>

        <button onClick={() => dispatchTwo({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
}

export default EnhhancedReducer;
