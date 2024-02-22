import { useState, createContext } from "react"

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme:() => {}
})



export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('light')

  function toggleTheme(){
    if(theme === "light"){
      return setTheme("dark")
    }
  }

  return (
    <ThemeContext.Provider value={ {theme, toggleTheme} }>
    {children}
    </ThemeContext.Provider>
  )
}
