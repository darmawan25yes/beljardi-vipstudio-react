import Input from "./Input";
import Label from "./Label";
const InputForm = (props) => {
  const { type, placeholder, name, label, autoComplete, id } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        id={id}
      ></Input>
    </div>
  );
};
export default InputForm;
