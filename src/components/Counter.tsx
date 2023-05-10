import React from 'react';

import classes from './Counter.module.scss';
 
const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => [setCount((prev) => prev + 1)];
  return (
    <div className={classes.button}>
      <h1> {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;
