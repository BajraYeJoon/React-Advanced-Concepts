import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Confirm } from "./components/Confirm";
import { Featured } from "./components/Featured";
import { Home } from "./components/Home";
import Navigaotor from "./components/Navigaotor";
import { New } from "./components/New";
import { NoMatch } from "./components/NoMatch";
import { Product } from "./components/Product";
import { Admin } from "./components/Users/Admin";
import { UserDetails } from "./components/Users/UserDetails";
import { Users } from "./components/Users/Users";

function App() {
  return (
    <>
      <Navigaotor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="confirm" element={<Confirm />} />

        {/* Nested Routes */}
        <Route path="product" element={<Product />}>
          {/* Index props shows the default route to be shown when routed to the parent component */}
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />

        </Route>
        
        {/* Nested routes with dynamic routing */}
        <Route path="users" element={<Users />}>
           <Route path=":userId" element={<UserDetails />}></Route>
           <Route path="admin" element={<Admin />} />

        </Route>

        {/* * has special meaning as if no other match found then path * is called */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
