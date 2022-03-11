import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

//Search param is used for filtering anything using search param
// outlet is important to display the child (to let know the parents about the child that need to be displayed)

export const Users = () => {
  //Search param takes two methods similar as of useState
  const [searchParam, setSearchParam] = useSearchParams();

  //it will be shown in the url as filter=active
  const showActiveUser = searchParam.get("filter") === "active";

  return (
    <div>
      <h1>User 1 </h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <Outlet />

      <div>
        <button onClick={() => setSearchParam({ filter: "active" })}>
          Active users
        </button>
        <button onClick={() => setSearchParam({})}>Reset filter</button>
      </div>

      {showActiveUser ? <h1>All active users</h1> : <h1>ALl users</h1>}
    </div>
  );
};
