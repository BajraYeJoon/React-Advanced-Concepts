import React, { useState } from "react";
import useInput from "./useInput";

function User() {
  //Custom Hook is defined and the return from the hook is set to our custom desirre
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label>First Name</label>

          {/* Bind spread operator is used to get the combination that is set in bind object in the custom hooks */}
          <input type="text" {...bindFirstName} />
        </div>
        <div>
          <label>last Name</label>
          <input type="text" {...bindLastName} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default User;
