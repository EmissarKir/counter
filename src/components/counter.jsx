import React, { useState } from "react";

const Counter = (props) => {
  console.log("props", props);
  const [value, setValue] = useState(props.value);
  let disabledButton = value <= 0;

  const formValue = () => {
    return value === 0 ? "Ноль" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value <= 0 ? "danger" : "primary";

    return classes;
  };

  const handlerIncrement = () => {
    setValue(value + 1);
  };

  const handlerDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <h4>{props.name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
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
      <div
        className="button btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </div>
    </div>
  );
};

export default Counter;
