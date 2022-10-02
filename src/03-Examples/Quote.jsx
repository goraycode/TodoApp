import { useLayoutEffect, useRef, useState } from "react";

const Quote = ({ counter, data }) => {
  const h1Ref = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = h1Ref.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [data]);

  return (
    <>
      <section className="mt-5 bg-slate-300 p-2 rounded-md">
        <h3>{counter}</h3>

        {data.map((value) => (
          <div key={value.quote_id}>
            <h1 className="font-bold text-2xl" ref={h1Ref}>
              {value.quote}
            </h1>
            <p className="font-light text-xl text-gray-500 text-right">
              -{value.author}
            </p>
          </div>
        ))}

        <code>{JSON.stringify(boxSize)}</code>
      </section>
    </>
  );
};

export default Quote;
