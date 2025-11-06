import AutLayout from "../components/Layouts/AutLayout";
import FormLogin from "../components/Fragments/FormLogin";
const LoginPage = () => {
  return (
    <div>
      <AutLayout title="Login">
        <FormLogin />
      </AutLayout>
    </div>
  );
};

export default LoginPage;
