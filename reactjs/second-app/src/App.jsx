import "./App.css";
import { useState } from "react";
function App() {
  // JS code
  /**
   * JS Dynamic Language
   * 1. var keyword : var xyz=value;
   * 2. let keyword : let xyz=value; Use -> varry
   * 3. const keyword : const xyz=value ; use -> fixed
   * 4. nothing : xyz = value;
   * xyz = 10; -> Integer
   * xyz = 34.58; -> Float
   * xyz = "Ratnadip" -> String
   * xyz = [1,2,3,4] -> Array
   * Variable is loosely typed with value.
   */

  /**
   * JSX : JavaScript Extension
   * 1. JSX Expression { expression } : for calculation, calling function, using variable, etc.
   */

  //let name = "Ratnadip";
  let [name, setName] = useState("Ratnadip");

  function handleClick() {
    //name = "John Doe"; // modify <- directly
    setName("John Doe");
    console.log(name);
  }

  return (
    <div>
      <h1>Hello, {name}</h1>
      <hr />
      <button type="button" onClick={handleClick}>
        Click Me!
      </button>
      <hr />
      <p>Your Name is {name}, from Jagdambha College , Yavatmal.</p>
    </div>
  );
}

export default App;
