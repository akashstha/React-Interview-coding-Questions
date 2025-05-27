import { useEffect, useState } from "react";
import "./styles.css";

interface listName {
  name: string;
  checked: boolean;
}

export default function App() {
  /* 
  1.
  create a state - task, allTaks, ActiveTask, CompleteTask, FilterTask.
  2. submitHandler - submit the task to all task list
  3. change handler to assin task to respective filter.
   */
  const [task, setTask] = useState("");
  const [alltask, setAllTask] = useState<listName[]>([]);
  const [active, setActive] = useState<listName[]>([]);
  const [completed, setCompleted] = useState<listName[]>([]);
  const [filter, setFilter] = useState<listName[]>([]);

  useEffect(() => {
    setFilter(alltask);
  }, [alltask]);

  const submitHandler = (e) => {
    e.preventDefault();
    setAllTask((prev) => [...prev, { name: task, checked: false }]);
    setTask("");
  };

  const changeHandler = (i: any, taskList: listName) => {
    const updatedValue = alltask.map((e) =>
      e.name === taskList.name ? { ...e, checked: i.target.checked } : e
    );
    setAllTask(updatedValue);
    setActive(updatedValue.filter((e) => !e.checked));
    setCompleted(updatedValue.filter((e) => e.checked));
  };
  return (
    <div className="App">
      {/* 
    1. create input box and submit button
    2. create a filter - 3 button
    3. crate a todo list - display the tolist as per filter button.*/}
      <h1>Todo List</h1>
      <form onSubmit={submitHandler}>
        <label>
          {" "}
          Task :
          <input
            placeholder="Enter the name"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
      <h2>Filter: </h2>
      <button style={{ margin: "10px" }} onClick={() => setFilter(alltask)}>
        All
      </button>
      <button style={{ margin: "10px" }} onClick={() => setFilter(active)}>
        Active
      </button>
      <button style={{ margin: "10px" }} onClick={() => setFilter(completed)}>
        Completed
      </button>

      <h3>TODO LIST Names:</h3>
      <ul>
        {filter.map((e) => {
          return (
            <li>
              {
                <label>
                  <input
                    type="checkbox"
                    value={e.name}
                    checked={e.checked}
                    onChange={(i) => changeHandler(i, e)}
                  />
                  {e.name}
                </label>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}
