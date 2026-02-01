import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  function handleReset() {
    setCounter(0);
  }

  function handleNext() {
    setCounter((cur) => cur + 1);
  }

  function handlePrevious() {
    setCounter((cur) => (cur == 0 ? 0 : cur - 1));
  }

  return (
    <div className="container">
      <h1 className="title">Counter App</h1>
      <hr />

      <div className="counter">{counter}</div>

      <div className="controls">
        <button
          type="button"
          className="btn btn-previous"
          onClick={handlePrevious}
        >
          -
        </button>
        <button type="button" className="btn btn-reset" onClick={handleReset}>
          Reset
        </button>
        <button type="button" className="btn btn-next" onClick={handleNext}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
