import React, { useState } from "react";
import Couters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 1, id: 1, name: "ложка" },
    { value: 10, id: 2, name: "вилка" },
    { value: 100, id: 3, name: "тарелка" },
    { value: 0, id: 4, name: "стартовый набор минималиста" },
    { value: 15, id: 5, name: "ненужные вещи" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    const newCounters = counters.filter((counter) => counter.id !== counterId);
    setCounters(newCounters);
  };

  const handleIncrement = (counterId) => {
    const newCounters = [...counters];
    const indexObj = newCounters.findIndex(
      (counter) => counter.id === counterId
    );

    newCounters[indexObj].value += 1;
    setCounters(newCounters);
  };

  const handlerDecrement = (counterId) => {
    const newCounters = [...counters];
    const indexObj = newCounters.findIndex(
      (counter) => counter.id === counterId
    );

    newCounters[indexObj].value -= 1;
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar
          totalItems={counters.reduce((sum, curr) => sum + curr.value, 0)}
        />
        <Couters
          onIncrement={handleIncrement}
          onDecrement={handlerDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
