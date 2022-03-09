import React , {useState }from 'react'

function UseState() {

    const initial = 0
const [count, setCount] = useState(initial)

   
const incrementTen = () =>{ 
    for(let i = 0; i < 10 ; i++){
        setCount(prevState => prevState + 1)
    }
}

  return (
    <div>
        Count: {count}
        <button onClick={() => setCount(initial)}>Reset</button>
        <button onClick={() => setCount(prevState => prevState + 1)}>INCREMENT</button>
        <button onClick={() => setCount(prevState => prevState - 1)}>DECREMENT</button>
        <button onClick={() => setCount(incrementTen)}>TEN</button>
    </div>
  )
}

export default UseState