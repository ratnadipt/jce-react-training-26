import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [sqr, setSqr] = useState(0);
  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleClick() {
    setSqr(num * num);
  }
  return (
    <div>
      <h1>Square Application</h1>
      <form>
        <label htmlFor="num">Enter Any Number : </label>
        <input type="number" name="num" onChange={handleChange} />
        <br />
        <button type="button" onClick={handleClick}>
          Calculate
        </button>
      </form>
      <hr />
      <h1>Square = {sqr} </h1>
    </div>
  );
}

export default App;
