import { useEffect } from "react"
import { useState } from "react"

export default function List({ getItems }) {
  const [items, setItems] = useState([])

  useEffect(()=> {
    getItems().then((result)=> setItems(result))
  },[getItems])

  return (
    <>
      
      {items &&
        // eslint-disable-next-line react/jsx-key
        items.map((item) => <p key={item.id}>{item.title || item.name }</p>)

      }
    </>
  )
}
