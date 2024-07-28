import "./App.css";
import { Todolist, TaskType } from "./Todolist";
import { useState } from "react";

function App() {
  // let tasks: Array<TaskType> = [
  //   { id: 1, title: "CSS", isDone: true },
  //   { id: 2, title: "JS", isDone: true },
  //   { id: 3, title: "React", isDone: false },
  //   { id: 4, title: "React", isDone: false },
  // ];

  let [tasks, setTasks] = useState([
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "React", isDone: false },
  ]);

  const removeTask = (id: number) => {
    tasks = tasks.filter((t) => t.id !== id);
    console.log("работаю");
    setTasks(tasks);
  };

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
