import clsx from "clsx";
import { useEffect } from "react";

export default function Input(props) {
  const {
    hideLabel,
    labelText,
    id,
    type,
    labelOn,
    handleInputChange,
    ...rest
  } = props;
  const hideLabelClass = clsx({
    "sr-only": hideLabel,
    label: true,
  });
  const inputClasses = clsx({}, type);

  return (
    <>
      <label className={hideLabelClass} htmlFor={id}>
        {labelText}
      </label>
      <input {...rest} id={id} className={inputClasses} type={type} />
    </>
  );
}
