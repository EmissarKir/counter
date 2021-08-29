import React from "react";

const Counter = ({ value, name, id, onDecrement, onIncrement, onDelete }) => {
  let disabledButton = value <= 0;

  const formValue = () => {
    return value === 0 ? "Ноль" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value <= 0 ? "danger" : "primary";

    return classes;
  };

  return (
    <div>
      <h4>{name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => onIncrement(id)}
        className="btn btn-primary btn-sm m-2"
      >
        Increment
      </button>
      <button
        onClick={() => onDecrement(id)}
        className="btn btn-secondary btn-sm"
        disabled={disabledButton}
      >
        Decrement
      </button>
      <div
        className="button btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </div>
    </div>
  );
};

export default Counter;
