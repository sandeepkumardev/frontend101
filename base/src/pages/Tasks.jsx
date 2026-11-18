import { useState } from "react";

const Tasks = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    setTasks([...tasks, input]);
  };

  return (
    <div>
      <div>
        <input value={input} onChange={handleInput} />
        <button onClick={handleAdd}>+</button>
      </div>

      <div>
        <ul>
          <li>Buy milk</li>
          <li>Buy soda</li>
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
