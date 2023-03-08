import React from "react";

export default function FormFieldImage({
  id,
  label,
  accept,
  title,
  isrequired,
  onChange,
  thumbnailRef
}) {
  function isRequired(e) {
    if (isrequired === "true") return e;
  }

  return (
    <div>
      <label for={id}>
        {label}
        {isRequired(<span>*</span>)}
      </label>
      <input
        type="file"
        ref={thumbnailRef}
        id={id}
        name={id}
        title={title}
        accept={accept}
        required={isRequired("required")}
        onChange={onChange}
      ></input>
    </div>
  );
}
