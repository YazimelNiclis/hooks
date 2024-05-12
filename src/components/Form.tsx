import React from "react";
import useForm from "../hooks/useForm";

const Form = () => {
  const { values, handleChange, resetForm } = useForm({ name: "", email: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(values);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
