const { useState } = require("react");

export const useChangeHandler = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const changeValues = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, changeValues];
};
