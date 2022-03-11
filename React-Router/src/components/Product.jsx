import React from "react";
import { Link , Outlet} from "react-router-dom";

export const Product = () => {
  return (
    <>
      <input type="text" placeholder="search" />
 
      <nav>
          <Link to='featured'>featured</Link>
          <Link to='new'>nEW</Link>
      </nav>

      {/* Outlet makes it able to communicate the parent with child */}
      <Outlet/>
    </>
  );
};
