import { useLayoutEffect, useRef, useState } from "react";

const useMeasure = (deps) => {
  console.log("measure");
  const [rect, setRect] = useState({});
  const myRef = useRef();
  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect());
    console.log("in layout");
  }, deps);

  return [myRef, rect];
};

export default useMeasure;
