import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="container">
      {tasks.map(function (task) {
        return <Task key={task.taskId} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
