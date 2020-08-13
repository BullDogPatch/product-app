import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <h1 onClick={() => setCount(prevCount => prevCount + 1)}>Plus</h1>
      <h1 onClick={() => setCount(prevCount => prevCount - 1)}>Minus</h1>
    </div>
  );
}

export default Counter;

// React JS for beginners: Tutorial 4 - State Hooks (Quentin Watt Tutorials)
// just finished video 4
