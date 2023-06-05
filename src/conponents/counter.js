import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="number">
        <h1>{count}</h1>
      </div>
      <div className="buttons">
        <button className="button-6" onClick={() => setCount(count - 1)}>Decrement</button>
        <button className="button-6" onClick={() => setCount(0)}>Reset</button>
        <button className="button-6" onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
