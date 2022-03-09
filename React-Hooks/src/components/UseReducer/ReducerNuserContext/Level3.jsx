import React, { useContext } from "react";
import { CountContext } from "../../../App";

function Level3() {
    //Consuming is done on hooks using useContext
  const countContext = useContext(CountContext);
  return (
    <div>
        {/* Instead of the regular consumer. the const name created is used to get the action in the app component */}
      <button onClick={() => countContext.dispatchValue("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.dispatchValue("decrement")}>
        Decrement
      </button>

      <button onClick={() => countContext.dispatchValue("reset")}>reset</button>
    </div>
  );
}

export default Level3;
