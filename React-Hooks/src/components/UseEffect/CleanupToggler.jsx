import React, { useState } from "react";
import CleanupEffect from "./CleanupEffect";

function CleanupToggler() {
  const [display, setDisplay] = useState(true);

  return (
    // This component uses conditional to show the events into the DOM

    <div>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <CleanupEffect />}
      {/* //if true executes otherwise the component will not be shown in Dom */}
    </div>
  );
}

export default CleanupToggler;
