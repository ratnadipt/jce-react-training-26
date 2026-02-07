import { useState } from "react";

function AddTask({ handleAddTask }) {
  const [formData, setFormData] = useState({
    taskId: 0,
    taskTitle: "",
    taskDate: "",
    taskDescription: "",
    taskStatus: "Pending",
  });
  function handleSubmit(e) {
    e.preventDefault();
    handleAddTask(formData);
  }

  function handleChange(e) {
    setFormData(function (oldData) {
      return { ...oldData, [e.target.name]: e.target.value };
    });
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <label htmlFor="taskId">Task ID : </label>
            <input type="text" name="taskId" onChange={handleChange} />
          </div>
          <div className="col">
            <label htmlFor="taskTitle">Task Title : </label>
            <input type="text" name="taskTitle" onChange={handleChange} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="taskDate">Task Date & Time : </label>
            <input
              type="datetime-local"
              name="taskDate"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="taskDescription">Description : </label>
            <textarea
              name="taskDescription"
              cols={40}
              rows={5}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="reset">CLEAR</button>
          </div>
          <div className="col">
            <button type="submit">ADD TASK</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
