// import { useReducer } from "react"

// function reducer(state, action){
//   switch(action.type){
//     case "increment":
//       return {
//         counter: state.counter + 1,
//       }
//     case "decrement":
//       return {
//         counter: state.counter - 2,
//       }
//     default:
//       return state
//   }
// }

// export default function Reducer() {
//   const [state, dispatch] = useReducer(reducer, {counter : 0})
  
//   return (
//     <div>
//       <p>{state.counter}</p>
//       <button onClick={()=> { dispatch({type: "increment"})} } >Increment</button>
//       <button onClick={()=> { dispatch({type: "decrement"})} } >Decrement</button>
//     </div>
//   )
// }


//caso mais complexo

import { useReducer, useState } from "react"

function reducer(state, action){
  switch(action.type){
    case "add-task":
      return {
        ...state, 
        tasks: [...state.tasks, {name: action.payload, isCompleted: false } ],
         taskCount: state.taskCount + 1,
      }
    case "toggle-task":
      return{
        ...state,
        tasks: state.tasks.map((item, index) => index === action.payload ? 
        {...item , isCompleted: !item.isCompleted } : item
        ),
      }
    default: 
      return state
  }
}

export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, {tasks : [], taskCount: 0})
  
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <input 
        value={inputValue} 
        onChange={(e)=> { setInputValue(e.target.value) } } />
      <button 
        onClick={()=> { 
        setInputValue("")
        dispatch({type: "add-task", payload: inputValue})} } >
            Adicionar
          </button>

      <div>
        {/* <button onClick={()=> { dispatch{type: "toggle-task"} } }></button> */}
        {state.tasks.map((task, index) => ( 
         
         <p 
         key={state.tasks[index].name}
         onClick={()=> { dispatch({type: "toggle-task", payload: index })}}
         style={ {textDecoration: task.isCompleted ? "line-through" : "none"} }
         >{task.name }</p>
        ))}
      </div>
    </div>
  )
}
