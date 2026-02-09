import Task from "./Task";

function TaskList({ tasks, handleUpdate, handleDelete }) {
  return (
    <div className="container list">
      {tasks.map(function (task) {
        return (
          <Task
            key={task.taskId}
            task={task}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
