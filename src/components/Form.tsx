import React from "react";
import useForm from "../hooks/useForm";
import "../styles/main.scss";

const Form = () => {
  const { values, handleChange, handleSubmit, resetForm, errors } = useForm({
    name: "",
    email: "",
  });

  const onFormSubmit = (isValid: boolean, values: {}) => {
    if (isValid) {
      console.log("se cargaron los datos", values);
      resetForm();
    } else {
      console.log("fallo");
    }
  };

  return (
    <div className="form-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(onFormSubmit);
        }}
      >
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
