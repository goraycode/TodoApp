import { useState } from "react";
import useCounter from "../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [bool, setbBool] = useState(true);
  return (
    <>
      <div className="container mx-auto mt-5">
        <h1 className="text-2xl">
          Counter: <Small value={counter} />
        </h1>

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

export default Memorize;
