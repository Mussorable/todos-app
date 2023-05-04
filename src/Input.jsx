import clsx from "clsx";

export default function Input(props) {
  const { hideLabel, labelText, id, children, type, labelOn, ...rest } = props;
  const hideLabelClass = clsx({
    "sr-only": hideLabel,
  });

  return (
    <>
      <label className={hideLabelClass} htmlFor={id}>
        {labelText}
      </label>
      <input {...rest} id={id} className="input" type={type}>
        {children}
      </input>
    </>
  );
}
