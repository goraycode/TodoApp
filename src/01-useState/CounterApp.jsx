import { useState } from "react";

const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <main className="">
        <h2>Counter: {counter1} </h2>
        <h2>Counter: {counter2} </h2>
        <h2>Counter: {counter3} </h2>
        <hr />
        <button
          className=""
          onClick={() =>
            setCounter({
              ...state,
              counter1: state.counter1 + 1,
            })
          }
        >
          +1
        </button>
      </main>
    </>
  );
};

export default CounterApp;
