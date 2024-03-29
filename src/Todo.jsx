import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const AddItem = () => {
    if (task.trim() !== "") {
      setTodo((t) => [...t, task.trim()]);
      setTask("");
    }
  };

  const removeItem = (index) => {
    setTodo(
      todo.filter((_, i) => {
        return i !== index;
      })
    );
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const newTodo = [...todo];
      const temp = newTodo[index];
      newTodo[index] = newTodo[index - 1];
      newTodo[index - 1] = temp;
      setTodo(newTodo);
    }
  };

  const handleMoveDown = (index) => {
    if (index < todo.length - 1) {
      const newTodo = [...todo];
      const temp = newTodo[index];
      newTodo[index] = newTodo[index + 1];
      newTodo[index + 1] = temp;
      setTodo(newTodo);
    }
  };
  return (
    <div className="todo-container">
      <div>
        <h1>To-Do-List</h1>
        <input
          id="todo-task"
          value={task}
          type="text"
          placeholder="Enter Task Here..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={AddItem}>Add</button>
      </div>
      <ol>
        {todo.map((t, index) => {
          return (
            <li key={index}>
              {t}{" "}
              <div className="todo-buttons">
                <span className="del" onClick={() => removeItem(index)}>
                  X
                </span>{" "}
                <span onClick={() => handleMoveUp(index)} className="moveup">
                  ⬆️
                </span>{" "}
                <span
                  onClick={() => handleMoveDown(index)}
                  className="movedown"
                >
                  ⬇️
                </span>
              </div>{" "}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
