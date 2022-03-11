import React from 'react'
import { Link } from 'react-router-dom'
export const Navigaotor = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navigaotor