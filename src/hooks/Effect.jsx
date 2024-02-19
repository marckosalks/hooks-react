import { useState } from "react"

export default function Effect() {
  // eslint-disable-next-line no-unused-vars
  const [resorceType, setResourceType] = useState('posts')

  const changeResourceType = (resorceType) =>{
    setResourceType(resorceType)
  }

  return (
    <div>
      <h1>{resorceType}</h1>
      <div>
        <button onClick={()=> changeResourceType("posts")} >Posts</button>
        <button onClick={()=> changeResourceType("comments")}>Comments</button>
        <button onClick={()=> changeResourceType("todos")}>Todos</button>
        </div>
    </div>
  )
}
