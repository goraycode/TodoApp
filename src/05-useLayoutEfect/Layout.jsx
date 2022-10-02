import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-Examples";

const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter(1);

  const {
    state: { data, isLoading, error },
  } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  if (counter > 102 || counter === 0) {
    reset();
  }

  return (
    <>
      <div className="container mx-auto">
        <h1 className="font-bold text-center mt-5 text-3xl">
          BreakingBad Quotes
        </h1>

        {isLoading && <LoadingQuote />}

        {!isLoading && <Quote counter={counter} data={data} />}

        {!isLoading && (
          <div className="flex gap-2 justify-center items-end">
            <button
              className="bg bg-blue-500 rounded-md px-3 py-1 text-white mt-5 hover:bg-blue-600"
              onClick={() => increment()}
            >
              Next quote
            </button>
            <button
              className="bg bg-blue-500 rounded-md px-3 py-1 text-white mt-5 hover:bg-blue-600"
              onClick={() => decrement()}
            >
              Prev quote
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
