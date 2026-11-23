import { useState } from "react";
import { Trash } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import "../styles/tasks.scss";

const Tasks = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    setTasks([...tasks, { id: uuidv4(), title: input, isCompleted: false }]);
    setInput("");
  };

  const handleUpdate = (e, id) => {
    const updatedList = tasks.map((t) => (t.id === id ? { ...t, isCompleted: e.target.checked } : t));
    setTasks(updatedList);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input value={input} onChange={handleInput} />
        <button type="submit">+</button>
      </form>

      <div>
        {tasks.map((t) => (
          <div key={t.id} className={` ${t.isCompleted ? "checked" : ""}`}>
            <input type="checkbox" checked={t.isCompleted} onChange={(e) => handleUpdate(e, t.id)} /> {t.title}{" "}
            <Trash onClick={() => handleDelete(t.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
