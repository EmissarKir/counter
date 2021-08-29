import React from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, ...rest }) => {
  return (
    <div>
      <h1>Counters</h1>
      <div className="button btn btn-primary btn-sm m-2" onClick={onReset}>
        Reset
      </div>
      {counters.map((counter) => (
        <Counter key={counter.id} {...counter} {...rest} />
      ))}
    </div>
  );
};

export default Counters;
