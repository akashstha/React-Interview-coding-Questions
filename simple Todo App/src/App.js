import { useState } from "react";
import "./styles.css";

export default function App() {
  /* Build a simple Todo App where you can add and remove items.

 */

  // 2 state -> todo, taskList

  const [taskList, setTaskList] = useState([]);
  const [todo, setTodo] = useState();
  /* [{id: 0, task:""}] */

  //Add Handler
  const onAddHandler = () => {
    if (todo) {
      const addId = { id: Date.now(), task: todo };
      const addTotaskList = [...taskList, addId];
      setTaskList(addTotaskList);
      setTodo("");
    }
  };

  //Remove Handler
  const onRemoveHandler = (e) => {
    if (e) {
      const filteredTodoList = taskList.filter((i) => i.id !== e);
      console.log("filtered", filteredTodoList);
      setTaskList(filteredTodoList);
    }
  };

  return (
    <div className="App">
      {/* Input Box for Task */}
      <input
        type="text"
        placeholder="Add a Tasks.."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={onAddHandler} style={{ marginLeft: "20px" }}>
        {" "}
        Add a Task
      </button>

      {/* Task List: */}
      <h1>Task List : </h1>
      {/* Display the list of the task from TaskList */}
      {taskList.length === 0 ? (
        <p>No Task Added yet! </p>
      ) : (
        <ul>
          {taskList.map((e) => {
            return (
              <li key={e.id} style={{ padding: "20px" }}>
                {e.task}{" "}
                <button type="button" onClick={() => onRemoveHandler(e.id)}>
                  Remove task
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
