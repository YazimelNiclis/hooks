import { useState, ChangeEvent } from "react";

type Inputs = {
  [key: string]: any;
};

function useForm<T extends Inputs>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Inputs>({} as Inputs);

  const validate = (values: T) => {
    let tempErrors: Inputs = {};
    if ("name" in values) {
      tempErrors.name = values.name ? "" : "Name is required";
    }
    if ("email" in values) {
      tempErrors.email = values.email ? "" : "Email is required";
      if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        tempErrors.email = "Email is not valid";
      }
    }
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    validate({ ...values, [name]: value } as T);
    console.log(values);
  };

  const handleSubmit = (callback: (isValid: boolean, values: T) => void) => {
    if (validate(values)) {
      callback(true, values);
      resetForm();
    } else {
      callback(false, values);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    handleSubmit,
    resetForm,
    errors,
  };
}

export default useForm;
