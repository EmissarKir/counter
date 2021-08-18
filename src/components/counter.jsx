import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  let disabledButton = count <= 0;

  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count <= 0 ? "danger" : "primary";

    return classes;
  };

  const handlerIncrement = () => {
    setCount(count + 1);
  };

  const handlerDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button onClick={handlerIncrement} className="btn btn-primary btn-sm m-2">
        Increment
      </button>
      <button
        onClick={handlerDecrement}
        className="btn btn-secondary btn-sm"
        disabled={disabledButton}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
