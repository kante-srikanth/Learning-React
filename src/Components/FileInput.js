import React, { useRef } from "react";

const FileInput = () => {
  const inputFileRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputFileRef.current.files);
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="file" ref={inputFileRef} />
      <input type="submit" />
    </form>
  );
};

export default FileInput;
