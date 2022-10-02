import useCounter from "../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <main className="container mx-auto mt-5">
        <h1>Counter with Custom Hook {counter}</h1>
        <div className="flex gap-1">
          <button
            className="bg bg-blue-500 px-3 py-2 mt-2 rounded-md hover:bg-blue-600"
            onClick={() => increment()}
          >
            +1
          </button>
          <button
            className="bg bg-blue-500 px-3 py-2 mt-2 rounded-md hover:bg-blue-600"
            onClick={() => reset()}
          >
            Reset
          </button>
          <button
            className="bg bg-blue-500 px-3 py-2 mt-2 rounded-md hover:bg-blue-600"
            onClick={() => decrement()}
          >
            -1
          </button>
        </div>
      </main>
    </>
  );
};

export default CounterWithCustomHook;
