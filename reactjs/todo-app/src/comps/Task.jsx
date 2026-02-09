import { useState } from "react";

function Task({ task, handleUpdate, handleDelete }) {
  const [x, setX] = useState(task.taskStatus);
  function handleChange(e) {
    handleUpdate(e.target.checked ? "Confirm" : "Pending");
    e.target.checked ? setX("Comfirm") : setX("Pending");
  }

  function deleteTask() {
    handleDelete(task.taskId);
  }
  return (
    <div className="container">
      <ol>
        <li>
          <span>{task.taskId}</span>
          <h3>{task.taskTitle}</h3>
          <p>{task.taskDescription}</p>
          <span>{task.taskDate}</span>
          <input type="checkbox" name="status" onChange={handleChange} />
          {/* <span>{task.taskStatus}</span> */}
          <span>{x}</span>
          <button type="button" className="del" onClick={deleteTask}>
            DEL
          </button>
        </li>
      </ol>
    </div>
  );
}

export default Task;
