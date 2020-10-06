import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({ result: "", loading: true });

  useEffect(() => {
    setData((data) => ({ result: data.result, loading: true }));
    fetch(url)
      .then((data) => data.text())
      .then((item) => setData({ result: item, loading: false }));
  }, [url]);

  return data;
};

export default useFetch;
