import React from "react";

const RepeatingList = (props) => {
  const items = [];
  for (let i = 1; i <= props.times; i++) {
    items.push(props.children(i));
  }

  return <div>{items}</div>;
};

export default RepeatingList;
