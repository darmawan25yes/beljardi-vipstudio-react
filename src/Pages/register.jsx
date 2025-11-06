import AutLayout from "../components/Layouts/AutLayout";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <div>
      <AutLayout title="Register">
        <FormRegister />
      </AutLayout>
    </div>
  );
};

export default RegisterPage;
