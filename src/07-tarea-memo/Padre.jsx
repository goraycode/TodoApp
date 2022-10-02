import { Hijo } from "./Hijo";
import { useCallback, useState } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback((num) => {
    setValor((c) => c + num);
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold">Padre</h1>
      <p className="text-xl"> Total: {valor} </p>

      <hr />

      <div className="flex gap-2 mt-2">
        {numeros.map((n) => (
          <Hijo key={n} numero={n} incrementar={incrementar} />
        ))}
        {/* <Hijo /> */}
      </div>
    </div>
  );
};
