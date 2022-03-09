import React, { useState } from "react";

function WithObject() {
  const [greet, setGreet] = useState({ salute: "", firstName: "" });

  const setName = () => {
    alert(`name is set ${greet.salute}`)
  };
  return (
    <div>
      <form onSubmit={setName}>
        <input
          type="text"
          value={greet.salute}
          onChange={(e) => setGreet({ ...greet, salute: e.target.value })}
        />
        <input
          type="text"
          value={greet.firstName}
          onChange={(e) => setGreet({ ...greet, firstName: e.target.value })}
        />

        <h1>
          Hello {greet.salute} {greet.firstName}
        </h1>
          <button type="submit">Set</button>
      </form>
    </div>
  );
}

export default WithObject;
