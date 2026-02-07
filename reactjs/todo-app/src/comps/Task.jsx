function Task({ task }) {
  return (
    <div className="container">
      <ol>
        <li>
          <span>{task.taskId}</span>
          <h3>{task.taskTitle}</h3>
          <p>{task.taskDescription}</p>
          <span>{task.taskDate}</span>
          <span>{task.taskStatus}</span>
        </li>
      </ol>
    </div>
  );
}

export default Task;
