import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const up = () => {
    setCount(count + 1);
  };

  const down = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={up}>+</button>
      {count}
      <button onClick={down}>-</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
