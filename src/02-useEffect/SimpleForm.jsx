import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Gerson",
    email: "jofre1236@gmail.com",
  });

  const { username, email } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /* cuando se pone un arreglo vacio queremos que el useEffect solo se dispare una sola vez 
  y se monte, es decir, se renderize.
  
  Las dependencias es la que esta después del callback de useEffect y son las condiciones 
   por la que queremos que el useEffect se vuelva a disparar, es decir, cada vez que haya 
   un cambio en la dependencia*/

  useEffect(() => {
    //console.log("useEffect called");
  }, []);

  useEffect(() => {
    //console.log("formState change");
  }, [formState]);

  //se disparará el callback (funcion interna de useEffect) cuando haga cambios en el email
  useEffect(() => {
    //console.log("email changed");
  }, [email]);

  return (
    <>
      <div className="container mx-auto mt-5 w-11/12">
        <h1>Formulario simple</h1>
        <form action="" className="flex flex-col gap-2 my-2">
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="border border-green-500 rounded-md py-1 px-2 outline-none"
            value={username}
            onChange={onInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="border border-green-500 rounded-md py-1 px-2 outline-none"
            value={email}
            onChange={onInputChange}
          />
        </form>
        {username === "Gerson2" && <Message />}
      </div>
    </>
  );
};

export default SimpleForm;
