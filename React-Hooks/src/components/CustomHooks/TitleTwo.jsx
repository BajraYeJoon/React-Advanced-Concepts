import React ,{useState }from 'react'
import useDocTitle from './useDocTitle'

function TitleTwo() {
    const [count, setCount] = useState(0)
    
    useDocTitle(count)
  return (
    <div><button onClick={() => setCount(count + 1)}> Counter Two Clicked- {count}</button></div>
  )
}

export default TitleTwo