import { useState } from "react";
import { Trash } from "lucide-react";

const Tasks = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(["buy milk", "buy soda"]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    setTasks([...tasks, input]);
    setInput("");
  };

  const handleDelete = (task) => {
    const updatedList = tasks.filter((t) => t !== task);
    setTasks(updatedList);
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input value={input} onChange={handleInput} />
        <button type="submit">+</button>
      </form>

      <div>
        <ul>
          {tasks.map((t) => (
            <li>
              <input type="checkbox" /> {t} <Trash onClick={() => handleDelete(t)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;

// [1,2,3] = [<li>1</li>, <li>2</li>, <li>3</li>]
