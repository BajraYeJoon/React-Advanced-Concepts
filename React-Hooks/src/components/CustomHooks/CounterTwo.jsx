import React , {useState , useEffect }from 'react'
import useCounter from './useCounter'

function CounterTwo() {
   const [count, increment, decrement, reset] = useCounter(45,45)
  return (
    <div>CounterTwo - {count}
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button></div>
  )
}

export default CounterTwo