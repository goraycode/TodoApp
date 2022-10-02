import { memo } from "react";

export const Hijo = memo(({ numero, incrementar }) => {

  return (
    <button
      className="bg bg-blue-500 px-3 py-1 rounded-md text-white hover:bg-blue-600"
      onClick={() => incrementar(numero)}
    >
      {numero}
    </button>
  );
});
