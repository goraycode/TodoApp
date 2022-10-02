import { useState } from "react";
import useCounter from "../hooks/useCounter";
import Small from "./Small";

const heavyStuff = (iterationNumber = 10) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Aqui vamos...");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

const MemoHook = () => {
  const { counter, increment } = useCounter(1);
  const [bool, setbBool] = useState(true);

  //Se ejecutará cada vez que se actualice solo el kcounter y no todo el functioanl component
  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <div className="container mx-auto mt-5">
        <h1 className="text-2xl">
          Counter: <Small value={counter} />
        </h1>

        <p>{memorizeValue}</p>

        <button
          className="bg bg-blue-500 rounded-md px-3 py-1 text-white"
          onClick={() => increment()}
        >
          +1
        </button>

        <button
          className="bg bg-blue-500 rounded-md px-3 py-1 text-white ml-2"
          onClick={() => setbBool(!bool)}
        >
          {JSON.stringify(bool)}
        </button>
      </div>
    </>
  );
};

export default MemoHook;
