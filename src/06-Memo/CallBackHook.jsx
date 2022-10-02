import { useCallback, useMemo, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallBackHook = () => {
  const [counter, setcounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setcounter((c) => c + value);
  }, []);

  return (
    <>
      <div className="container mx-auto mt-5">
        <h1 className="text-2xl">useCallBack hook: {counter}</h1>

        <ShowIncrement increment={incrementFather} />
      </div>
    </>
  );
};

export default CallBackHook;
