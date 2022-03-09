import React, { useState, useEffect } from "react";

function UseEffectRender() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useeffect is used to replace the component did update and it will be triggered
  //after every renders
  //the second parameter in the useeffect is a checker for the changed values. if change value then rerender otherwise igore
  useEffect(() => {
    console.log("Updating");
    document.title = `You Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default UseEffectRender;
