import { useState } from "react";

function AddStudent({ handleData }) {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    contactNo: "",
  });

  function handleSave(e) {
    e.preventDefault(); // no reloading
    // console.log(formData);
    handleData(formData);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h1>ADD NEW STUDENT</h1>
      <hr />
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="city">City : </label>
          <input type="text" name="city" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="contactNo">Mobile No. : </label>
          <input type="text" name="contactNo" onChange={handleChange} />
        </div>
        <div>
          <button type="reset">CLEAR</button>
          <button type="submit">SAVE</button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
