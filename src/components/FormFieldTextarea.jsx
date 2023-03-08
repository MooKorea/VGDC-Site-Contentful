import React from "react";

export default function FormFieldTextarea({ id, label, placeholder, isrequired }) {
  function isRequired(e) {
    if (isrequired === "true") return e;
  }

  return (
    <div>
      <label for={id}>
        {label}
        {isRequired(<span>*</span>)}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        required={isRequired("required")}
      ></textarea>
    </div>
  );
}
