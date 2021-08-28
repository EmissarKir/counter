import React, { useState } from "react";
import Counter from "./counter";

const Counters = () => {
  const [counters, setCounters] = useState([
    { value: 1, id: 1, name: "ложка" },
    { value: 10, id: 2, name: "вилка" },
    { value: 100, id: 3, name: "тарелка" },
    { value: 0, id: 4, name: "стартовый набор минималиста" },
    { value: 15, id: 5, name: "ненужные вещи" },
  ]);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId);
    setCounters(newCounters);
  };
  return (
    <div>
      <h1>Counters</h1>;
      {counters.map((counter) => (
        <Counter key={counter.id} onDelete={handleDelete} {...counter} />
      ))}
    </div>
  );
};

export default Counters;
