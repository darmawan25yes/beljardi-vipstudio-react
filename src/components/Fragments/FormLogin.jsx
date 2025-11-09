import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
const FormLogin = () => {
  /** @param {React.FormEvent} event */
  const handleLogin = (event) => {
    console.log("Login");
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form action="" onSubmit={handleLogin}>
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
      <Button varian="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};
export default FormLogin;
