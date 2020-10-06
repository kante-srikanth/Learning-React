import React, { useState } from "react";
import useFetch from "../HOOKS/useFetch";
import useMeasure from "../HOOKS/useMeasure";

const FactsWidget = () => {
  const [item, setItem] = useState(0);
  const { result, loading } = useFetch(`http://numbersapi.com/${item}`);

  const [ref, rect] = useMeasure([result]);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={ref}>{loading ? "loading ..." : result}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <button onClick={() => setItem((item) => item + 1)}>
        Fetch Next Fact
      </button>
    </div>
  );
};

export default FactsWidget;
