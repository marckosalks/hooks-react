import { useMemo } from "react"
import { useState } from "react"

function slowFunction(num){
    console.log("Slow function is beig called!")
    for (let i = 0; i < 10000; i++)
    return num * 2
  }


export default function Memo() {
  const [number, setNumber] = useState(1)
  const [text, setText] = useState("")

  const doubleNumber = useMemo( () =>{
   return slowFunction(number)
  }, [number])

  return (
    <>
      <p>{number}</p>
      <input value={text} onChange={(e)=> setText(e.target.value) } />
      <button onClick={() => setNumber(2)}>Increment</button>
      <p>Text: {text}</p>
    </>
  )
}
