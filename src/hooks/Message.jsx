import { ThemeContext } from "./Context"
import { useContext } from "react"

export default function Message() {
  
  const { theme, toggleTheme} = useContext(ThemeContext)
  return (
    <>


          <div
          style={ {
            padding: 20,
            borderRadius: 10,
            backgroundColor: theme === "light" ? "#eee" : "#333",
            color: theme === "dark" ? "#eee" : "#333",
          } }
          >
            <h1>Tema Atual: {theme}</h1>
            <button onClick={() => toggleTheme()}>Mudar para {theme === "light" ? "dark" : "light"}</button>
          </div>
    </>
  )
}
