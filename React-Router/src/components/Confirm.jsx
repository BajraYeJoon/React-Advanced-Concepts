import React from 'react'
import { useNavigate } from 'react-router-dom'

//usenavigate hook navigates the page 

export const Confirm = () => {
    //assigning the hook to the constant and passing it in the arrow function 
    const navigate = useNavigate()
  return (
    <>
      <div> Confirm payment</div>
      <button onClick={() => navigate(-1)}>No! Go back</button>
    </>
  )
}

