import ThemeContextProvider from "./hooks/Context"

import Greeting from "./hooks/Greeting"
import Message from "./hooks/Message"


function App() {
 
  return (
    <ThemeContextProvider>
      <Message/>
      <Greeting/>
    </ThemeContextProvider>

  )
}

export default App
