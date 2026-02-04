import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    stdName: "",
    stdCity: "",
    stdDoB: "",
  });

  function handleChange(e) {
    e.preventDefault(); // page re-load prevent
    // console.log(e.target.value);
    // console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <form>
        <label htmlFor="stdName">Enter Student Name : </label>
        <input type="text" name="stdName" onChange={handleChange} />
        <br />
        <label htmlFor="stdCity">Enter City : </label>
        <input type="text" name="stdCity" onChange={handleChange} />
        <br />
        <label htmlFor="stdDoB">Enter City : </label>
        <input type="date" name="stdDoB" onChange={handleChange} />
        <br />
        <input type="submit" value="Save" />
      </form>
      <hr />
      <h1>Student Name : {formData.stdName}</h1>
      <h1>Student City : {formData.stdCity}</h1>
      <h1>Student DoB : {formData.stdDoB}</h1>
    </div>
  );
}

export default App;

/**
  function handleSubmit(e) {
    e.preventDefault(); // page re-load prevent
    console.log(e.target["stdName"].value);
    console.log(e.target["stdCity"].value);
  } 
*  <form onSubmit={handleSubmit}>
        <label htmlFor="stdName">Enter Student Name : </label>
        <input type="text" name="stdName" />
        <br />
        <label htmlFor="stdCity">Enter City : </label>
        <input type="text" name="stdCity" />
        <br />
        <input type="submit" value="Save" />
      </form>
 * 
 */
