import React from 'react';
import { Outlet } from 'react-router-dom';

// outlet is important to display the child (to let know the parents about the child that need to be displayed)

export const Users = () => {
  return (
    <div>
        <h1>User 1 </h1>
        <h1>User 2</h1>
        <h1>User 3</h1>    
        <Outlet />
    </div>
  )
}
