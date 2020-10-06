import React, { useState, useCallback, useMemo } from "react";

import useFetch from "../HOOKS/useFetch";

const ComputeLongestWord = () => {
  const [count, setCount] = useState(0);
  const { result } = useFetch(
    "https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json"
  );

  const computeFn = useCallback((arr) => {
    if (!arr) {
      return [];
    }

    console.log("computing longest word");

    let longestword = "";

    JSON.parse(arr).forEach((sentence) => {
      debugger;
      sentence.split(" ").forEach((word) => {
        if (word.length > longestword.length) {
          longestword = word;
        }
      });
    });
    return longestword;
  }, []);

  const longword = useMemo(() => computeFn(result), [result, computeFn]);

  return (
    <div>
      longest word is {longword}
      <p>count : {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment count
      </button>
    </div>
  );
};

export default ComputeLongestWord;
