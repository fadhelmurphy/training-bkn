import React, { useState } from 'react';
import Siblings from './Siblings';

export default function Count() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Siblings count={count}></Siblings>
    </div>
  );
}