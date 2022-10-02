import { useRef } from "react";

const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log(inputRef);
    inputRef.current.select(); //selecciona el elemento que tiene el inputRef
  };

  return (
    <>
      <div className="container mx-auto mt-5">
        <h1>Focus Screen</h1>
        <input
          ref={inputRef}
          type="text"
          name="name"
          id="name"
          placeholder="Ingrese su nombre"
          className="border-b-2 border-blue-400 outline-none hover:border-blue-800"
        />

        <button
          className="bog bg-blue-500 px-2 py-1 mx-2 rounded-md"
          onClick={onClick}
        >
          Set focus
        </button>
      </div>
    </>
  );
};

export default FocusScreen;
