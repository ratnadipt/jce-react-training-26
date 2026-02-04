import { useState } from "react";

function Addition() {
  const [numbers, setNumbers] = useState({
    num1: "",
    num2: "",
  });

  const [result, setResult] = useState(0);

  function handleChange(e) {
    setNumbers({
      ...numbers,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddition(e) {
    e.preventDefault();
    let a = parseFloat(numbers.num1);
    let b = parseFloat(numbers.num2);
    let sum = a + b;

    setResult(sum);
  }

  return (
    <div>
      <h1>Addition App</h1>
      <form>
        <label htmlFor="num1">Enter Number 1 :</label>
        <input type="text" name="num1" onChange={handleChange} />
        <br />

        <label htmlFor="num2">Enter Number 2 :</label>
        <input type="text" name="num2" onChange={handleChange} />
        <br />

        <button onClick={handleAddition}>ADD</button>
      </form>
      <div>
        Result : <span>{result}</span>
      </div>
    </div>
  );
}

export default Addition;
