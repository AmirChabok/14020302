import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const inc = () => {
    setCounter(counter + 1);
  };

  const dec = () => {
    setCounter(counter - 1);
  };

  return (<> <button onClick={() => setCount(count => count + 1)}>
    count is {count}
  </button>

    <button onClick={inc}>
      + {counter}
    </button>

    <button onClick={dec}>
      - {counter}
    </button></>);
}
