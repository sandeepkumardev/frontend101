import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import "../styles/tasks.scss";

const Tasks = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();

    const title = input.trim();
    if (!title) return;

    setTasks((currentTasks) => [...currentTasks, { id: uuidv4(), title, isCompleted: false }]);
    setInput("");
  };

  const handleUpdate = (id, isCompleted) => {
    setTasks((currentTasks) => currentTasks.map((task) => (task.id === id ? { ...task, isCompleted } : task)));
  };

  const handleDelete = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <section className="tasks">
      <h2 className="tasks__title">My Tasks</h2>

      <form className="tasks__form" onSubmit={handleAdd}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          aria-label="New task"
        />
        <button type="submit" disabled={!input.trim()} aria-label="Add task">
          <Plus size={20} />
        </button>
      </form>

      {tasks.length > 0 ? (
        <ul className="tasks__list">
          {tasks.map((task) => (
            <li className={`tasks__item ${task.isCompleted ? "is-completed" : ""}`} key={task.id}>
              <label className="tasks__check">
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={(e) => handleUpdate(task.id, e.target.checked)}
                  aria-label={`Mark ${task.title} as ${task.isCompleted ? "incomplete" : "complete"}`}
                />
                <span />
              </label>

              <span className="tasks__text">{task.title}</span>

              <button
                className="tasks__delete"
                type="button"
                onClick={() => handleDelete(task.id)}
                aria-label={`Delete ${task.title}`}
              >
                <Trash2 size={17} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="tasks__empty">No tasks added yet.</p>
      )}
    </section>
  );
};

export default Tasks;
