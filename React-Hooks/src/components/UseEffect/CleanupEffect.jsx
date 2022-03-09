import React, { useState, useEffect } from "react";

function CleanupEffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // function to check the position of the mouse
  const mousePosition = (event) => {
    console.log("Mouse event");
    setX(event.clientX);
    setY(event.clientY);
  };

  // When mouse is moved the mouse position function is called and the value is shown
  useEffect(() => {
    console.log("useffect called");
    window.addEventListener("mousemove", mousePosition);

    //  this return mimics the component will unmount method and hence wont show the mouse movement log in console after
    // the toggle is false
    return () => {
      console.log("Unmounted the Mouse");
      window.removeEventListener("mousemove", mousePosition);
    };
  }, []);

  // This ensures the effect is only mounted onc and not re rendered!!
  return (
    <div>
      {" "}
      X- {x} Y-{y}{" "}
    </div>
  );
}

export default CleanupEffect;
