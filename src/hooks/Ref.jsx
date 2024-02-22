import { useState, useRef, useEffect } from "react"

export default function Ref() {
  const [name, useName] = useState("")
  const prevoiusName = useRef()
  // const renders = useRef(0)
  // const inputRef = useRef()

  // useEffect(()=>{
  //   renders.current = renders.current + 1
  // })

  useEffect(()=>{
    prevoiusName.current = name
  }, [name])


  // function HandlefocusOn(){
  //   inputRef.current.focus()
  // }

  return (
    <div>
       {/* ref={inputRef}  */}
      <input value={name} type="text" onChange={(e) => useName(e.target.value)} />
      <p>Salve meu amigo a {name}, Seja bem-vindo!</p>
      <p>meu nome antes {prevoiusName.current}</p>
      {/* <p>Está é a quantidade de renderizações: {renders.current}</p> */}
      {/* <button onClick={HandlefocusOn}>Clique neu</button> */}
    </div>
  )
}
