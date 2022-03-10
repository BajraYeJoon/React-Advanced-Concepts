import {useState} from 'react'

//Imported the common functionality for both the counter 
function useCounter(initial = 0, value) {
    const [count, setCount] = useState(initial)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }
    const reset = () => {
        setCount(initial)
    }
    //return is used by destructuring the required value attribute that to be passed to the counters
  return [count, increment, decrement,  reset]
}

export default useCounter