import { useState } from "react";
import "./App.css";
import AddTask from "./comps/AddTask";
import AppTitle from "./comps/AppTitle";
import Message from "./comps/Message";
import TaskList from "./comps/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // to add new task
  function addNewTask(task) {
    setTasks(function (oldTask) {
      return [task, ...oldTask];
    });
  }

  // to update status
  function updateStatus(id, sts) {
    // fetch task based on id
    tasks.map(function (t) {
      if (t.taskId == id) {
        return (t.taskStatus = sts);
      }
    });
  }

  // to delete task
  function handleDelete(id) {
    setTasks(
      tasks.filter(function (t) {
        return t.taskId != id;
      }),
    );
  }
  return (
    <div className="app-container">
      <AppTitle />
      <AddTask handleAddTask={addNewTask} />
      <TaskList
        tasks={tasks}
        handleUpdate={updateStatus}
        handleDelete={handleDelete}
      />
      {tasks.length == 0 && <Message />}
    </div>
  );
}

export default App;
