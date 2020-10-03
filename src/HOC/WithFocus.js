import React from "react";
import hOCInput from "./HOCInput";
import Input from "./Input";

const WithFocus = React.forwardRef((props, ref) => {
  return (
    <>
      <Input ref={ref} />
      <button onClick={props.onClickHandler}>
        Focus Input using forward ref and HOC{" "}
      </button>
    </>
  );
});

export default hOCInput(WithFocus);
