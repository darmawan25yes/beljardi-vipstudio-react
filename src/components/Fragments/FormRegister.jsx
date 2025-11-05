import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        type="name"
        placeholder="Full Name"
        name="name"
        label="Full Name"
        autoComplete="name"
      />
      <InputForm
        type="email"
        placeholder="example@gmail.com"
        name="email"
        label="Email"
        autoComplete="email"
      />
      <InputForm
        type="password"
        placeholder="********"
        name="password"
        label="Password"
        autoComplete="new-password"
      />
      <InputForm
        type="password"
        placeholder="********"
        name="confirmpassword"
        label="Confirm Password"
        autoComplete="new-password"
      />
      <Button varian="bg-blue-600 w-full">Register</Button>
    </form>
  );
};
export default FormRegister;
