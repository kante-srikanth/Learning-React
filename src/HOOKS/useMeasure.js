import { useLayoutEffect, useRef, useState } from "react";

const useMeasure = (deps) => {
  const [rect, setRect] = useState({});
  const myRef = useRef();
  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect());
  }, deps);

  return [myRef, rect];
};

export default useMeasure;
