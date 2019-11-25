import React from "react";
import { StyledInput } from "../../styled-components";

const Input = props => {
  const {
    label,
    type,
    change,
    placeholder,
    name,
    value,
    error,
    errorMessage
  } = props;
  return (
    <>
      <label htmlFor={1}>{label}</label>
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={change}
        placeholder={placeholder}
        color={error ? "1.5px solid #dc3545" : ""}
      />
      <div style={{ fontSize: "13px", color: "#dc3545" }}>
        {error ? errorMessage : ""}
      </div>
    </>
  );
};

export default Input;
