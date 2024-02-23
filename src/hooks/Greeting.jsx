import { ThemeContext } from "./Context";

export default function Greeting() {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: value.theme === "light" ? "#eee" : "#333" ,
            color: value.theme === "dark" ? "#eee" : "#333",
            marginTop: 20,
          }}
        >
          <h1>Fala Dev!📱</h1>
        </div>
        )

      }
    </ThemeContext.Consumer>
  )
}
