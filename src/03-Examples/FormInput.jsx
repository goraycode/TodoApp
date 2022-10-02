import useFetch from "../hooks/useFetch";
import useForm from "../hooks/useForm";

const FormInput = () => {
  const {
    formState: { numquote },
    onInputChange,
  } = useForm({
    numquote: "",
  });

  const {
    state: { data, isLoading, error },
  } = useFetch(`https://www.breakingbadapi.com/api/quotes/12`);

  return (
    <form action="">
      <input
        className="border-b-2 border-blue-500 outline-none w-32"
        type="number"
        name="numquote"
        id="numquote"
        placeholder="Ingrese quote"
        min={1}
        max={103}
        value={numquote}
        onChange={onInputChange}
      />
    </form>
  );
};

export default FormInput;
