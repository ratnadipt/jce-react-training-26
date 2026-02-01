import "./App.css";

function App() {
  function handleClick() {
    // code
    alert("Hello, Ratnadip, Welcome to the world of React JS.");
  }

  return (
    <div>
      <h1>Hello App</h1>
      <hr />
      <button type="button" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
}

export default App;
