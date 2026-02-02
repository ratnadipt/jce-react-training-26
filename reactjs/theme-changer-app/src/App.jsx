import { useState } from "react";
import "./App.css";

function App() {
  const [theme, changeTheme] = useState("light");

  function handleClick() {
    changeTheme(function (cur) {
      return cur == "light" ? "dark" : "light";
    });
  }

  return (
    <div className={`app ${theme}`}>
      <h1>Theme Changer App</h1>
      <hr />

      <button type="button" onClick={handleClick}>
        Change : {theme}{" "}
      </button>
    </div>
  );
}

export default App;
