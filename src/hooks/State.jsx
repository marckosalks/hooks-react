import { useState } from "react"

export function State() {
  const [count, setCount] = useState(0)

  //comportamento padão
  // function increment (){
  //   setCount(count + 1)
  // }


  function increment() {
    setCount((prevState)=> prevState + 1 )
  }
  
  return (
   <div>
    <h1>{count}</h1>
    <button onClick={increment}>count</button>
   </div>

  )
}


