import * as React from 'react';

const Counter: React.SFC = () => {
  const [counter, setCounter] = React.useState<number>(0);

  const onIncrement = (): void => {
    setCounter(counter + 1);
  };
  const onDecrement = (): void => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h3>{counter}</h3>
      <button onClick={onIncrement}> + </button>
      <button onClick={onDecrement}> - </button>
    </div>
  );
};

export default Counter;
