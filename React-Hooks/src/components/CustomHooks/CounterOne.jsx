import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

function CounterOne() {
  //From the render we assign the destructured attributes to the useCOUNTER HOOK
  const [count, increment, decrement, reset] = useCounter();
  return (
    <div>
      CounterOne - {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterOne;
