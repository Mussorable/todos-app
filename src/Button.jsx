export default function Button(props) {
  const { children, type, ...rest } = props;

  return (
    <>
      <button {...rest} className="button" type={type}>
        {children}
      </button>
    </>
  );
}
