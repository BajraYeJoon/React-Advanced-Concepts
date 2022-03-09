import React, { useState } from "react";

function WithArray() {
  //usestate with array with empty at initial
  const [nums, setNum] = useState([]);

  const addNum = () => {
    //spread operator is used to prevent override the prev values so two parameter in array
    setNum([
      ...nums,
      {
        id: nums.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={addNum}>Add a number</button>

      <ul>
        {
          //Iterating over the num and printing it everytime add number button is clicked!!!!!!!!!!!!
          nums.map((num) => (
            <li key={num.id}>{num.value}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default WithArray;
