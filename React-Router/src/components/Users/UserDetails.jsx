import React from 'react';
import { useParams } from 'react-router-dom';

// Param hook is used for URL value to be passed down as the destructured value at the time of display

export const UserDetails = () => {
    const {userId} = useParams()
  return (
    <div>Details of User {userId}</div>
  )
}
