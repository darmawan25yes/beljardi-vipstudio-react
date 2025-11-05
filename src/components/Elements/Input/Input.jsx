const Input = (props) => {
  const { type, placeholder, name, autoComplete } = props;
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      name={name}
      id={name}
      autoComplete={autoComplete}
    />
  );
};
export default Input;
