import AutLayout from "../components/Layouts/AutLayout";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div>
      <AutLayout title="Login">
        <FormLogin />
        <p className="font-medium text-sm text-slate-500 text-center py-2">
          {" "}
          Don't have account?{" "}
          <Link to="/register" className="text-blue-700">
            Sign up
          </Link>
        </p>
      </AutLayout>
    </div>
  );
};

export default LoginPage;
