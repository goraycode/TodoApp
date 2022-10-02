import useForm from "../hooks/useForm";

const TodoAdd = ({ onNewTodo }) => {
  const {
    formState: { description },
    onInputChange,
    onResetForm,
  } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    onNewTodo(newTodo);

    onResetForm();
  };

  return (
    <form
      action=""
      className="my-5 flex justify-between gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="description"
        id="description"
        className="border-b-2 border-blue-300 outline-none w-full focus:border-blue-600"
        placeholder="¿Qué planeas hacer?"
        autoComplete="off"
        value={description}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="bg-blue-500 px-3 py-1 text-white rounded-md hover:bg-blue-700"
      >
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
