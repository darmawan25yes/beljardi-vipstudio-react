import AutLayout from "../components/Layouts/AutLayout";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <div>
      <AutLayout title="Register">
        <FormRegister />
        <p className="font-medium text-sm text-slate-500 text-center py-2">
          {" "}
          Have account?{" "}
          <Link to="/login" className="text-blue-700">
            Login
          </Link>
        </p>
      </AutLayout>
    </div>
  );
};

export default RegisterPage;
