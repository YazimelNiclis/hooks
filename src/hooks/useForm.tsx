import { useState, ChangeEvent } from "react";

type Inputs = {
  [key: string]: any;
};

function useForm<T extends Inputs>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
}

export default useForm;
