import clsx from "clsx";

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

  return (
    <>
      <label className={hideLabelClass} htmlFor={id}>
        {labelText}
      </label>
      <input {...rest} id={id} className={type} type={type} />
    </>
  );
}
