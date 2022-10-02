import { useEffect } from "react";

const Message = () => {
  useEffect(() => {
    console.log("Message mounted");

    return () => {
      console.log("Message amounted");
    };
  }, []);

  return (
    <>
      <h3 className="bg bg-red-400 p-2 text-xl my-5 hidden">
        Usuario ya existe
      </h3>
    </>
  );
};

export default Message;
