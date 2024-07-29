import "./App.css";
import { Todolist, TaskType } from "./Todolist";
import { useState } from "react";

export type FilterValuesType = "all" | "active" | "completed";

function App() {
  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
    { id: 4, title: "React", isDone: false },
  ]);

  let [filter, setFilter] = useState<FilterValuesType>("all");

  const removeTask = (id: number) => {
    let filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
  };

  const changeFilter = (value: FilterValuesType) => {
    setFilter(value);
  };

  let taskForTodolist = tasks;
  if (filter === "completed") {
    taskForTodolist = tasks.filter((t) => t.isDone === true);
  }
  if (filter === "active") {
    taskForTodolist = tasks.filter((t) => t.isDone === false);
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn"
        tasks={taskForTodolist}
        removeTask={removeTask}
        changeFilter={changeFilter}
      />
    </div>
  );
}

export default App;
