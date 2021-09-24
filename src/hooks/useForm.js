import { useState } from "react";

export const useForm = (initState) => {
  const [values, setValues] = useState(initState);

  const handleInput = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  const resetForm = () => setValues(initState);

  return [values, handleInput, resetForm];
};
