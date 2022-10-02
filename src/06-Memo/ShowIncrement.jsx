import { memo } from "react";

const ShowIncrement = ({ increment }) => {
  console.log("Me volvi a dibujar");
  return (
    <>
      <button
        className="bg bg-blue-500 px-3 py-1 rounded-md text-white mt-2"
        onClick={() => increment(5)}
      >
        +1
      </button>
    </>
  );
};

export default memo(ShowIncrement);
