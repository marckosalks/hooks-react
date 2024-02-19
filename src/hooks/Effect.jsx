import { useState, useEffect } from "react"

export default function Effect() {
  const [items, setItems] = useState([])
  const [resorceType, setResourceType] = useState('posts')

  useEffect(()=>{
   const buscar = async () =>{
  
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resorceType}`)
    
      const resposeJSON = await response.json() 
      setItems(resposeJSON)
   }

   buscar()
    console.log("resouce type changed!")
  },[resorceType])

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

        {items.map((item) =>(
          <p>{item.id}</p>
        ))}
    </div>
  )
}
