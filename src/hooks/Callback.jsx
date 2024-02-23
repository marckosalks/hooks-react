import { useState } from "react"
import List from "./List"


export default function Callback() {
  const [text, setText] = useState("")
  const [resourceType, setResouceType] = useState("posts")
  
  async function getItems(){
    console.log("getItems is ben called!")
    

    
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resourceType}`
    )
    const responseJSON = await response.json()

    return responseJSON
  }

  return (
    <div>
      <input value={text} onChange={(e)=> setText(e.target.value)}/>
      <button onClick={() => setResouceType("posts")}>Posts</button>
      <button onClick={() => setResouceType("comments")}>Comments</button>
      <button onClick={() => setResouceType("todos")}>Todos</button>
   
      <List getItems={getItems} />
    </div>
  )
}
