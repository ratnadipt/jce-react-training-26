import { useState } from "react";
import "./App.css";

function App() {
  const [color, SetColor] = useState("white");

  function handleColorChange(e) {
    console.log(e.target.value);
    SetColor(e.target.value);
  }
  return (
    <div style={{ backgroundColor: color }}>
      <h1>Color Changer Application</h1>
      <hr />
      <label htmlFor="color">Choose Color : </label>
      <input type="color" name="color" onChange={handleColorChange} />
    </div>
  );
}

export default App;
