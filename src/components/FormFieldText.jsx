import React from "react";

export default function FormFieldText({ id, label, placeholder, pattern, isrequired }) {
  function isRequired(e) {
    if (isrequired === "true") return e;
  }

  return (
    <div>
      <label htmlFor={id}>
        {label}
        {isRequired(<span>*</span>)}
      </label>
      <input
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        pattern={pattern}
        required={isRequired("required")}
      ></input>
    </div>
  );
}
