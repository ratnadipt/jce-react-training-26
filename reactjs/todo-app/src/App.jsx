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
  return (
    <div className="app-container">
      <AppTitle />
      <AddTask handleAddTask={addNewTask} />
      <TaskList tasks={tasks} />
      <Message />
    </div>
  );
}

export default App;
