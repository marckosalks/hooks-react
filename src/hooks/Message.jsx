import { ThemeContext } from "./Context"

export default function Message() {
  return (
    <>
      <ThemeContext.Consumer>
        {(value) => (
          <div
          style={ {
            padding: 20,
            borderRadius: 10,
            backgroundColor: value.theme === "light" ? "#eee" : "#333",
            color: value.theme === "dark" ? "#eee" : "#333",
          } }
          >
            <h1>Tema Atual: {value.theme}</h1>
            <button onClick={() => value.toggleTheme()}>Mudar para {value.theme === "light" ? "dark" : "light"}</button>
          </div>
        )

        }
      </ThemeContext.Consumer>
    </>
  )
}
