import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button";
const FormLogin = () => {
  return (
    <form action="">
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
        autoComplete="current-password"
      />
      <Button varian="bg-blue-600 w-full">Login</Button>
    </form>
  );
};
export default FormLogin;
