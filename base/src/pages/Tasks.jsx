import { useState } from "react";

const Tasks = () => {
  // let count = 10;
  const [count, setCount] = useState(10);

  const inc = () => {
    console.log(count);
    // count = count + 1;
    setCount(count + 1);
  };

  return (
    <div>
      {count} <button onClick={inc}>+</button>
    </div>
  );
};

export default Tasks;

// useState
