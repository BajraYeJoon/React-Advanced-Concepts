import React ,{useState }from 'react'
import useDocTitle from './useDocTitle'

function TitleOne() {
    const [count, setCount] = useState(0)
    
    //The custom hook is imported in the place of the useeffect as dependency is passed through
    useDocTitle(count)
  return (
    <div><button onClick={() => setCount(count + 1)}> Counter One Clicked- {count}</button></div>
  )
}

export default TitleOne