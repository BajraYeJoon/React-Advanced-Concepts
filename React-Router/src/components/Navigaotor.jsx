import React from "react";
import { NavLink } from "react-router-dom";
export const Navigaotor = () => {
  //CUSTOM function is enclosed in the style tag and the function uses conditional passing as param inside arrow func
  // and the css is added in Camel Case
  const navStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <nav className='primary-nav'>
      {/* navlink is specifically to the navbar   */}
      {/* CSS in jsx */}
      <NavLink style={navStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navStyles} to="/product">
        PRODUCT
      </NavLink>
    </nav>
  );
};

export default Navigaotor;
