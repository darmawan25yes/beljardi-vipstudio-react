import IconBIM from "../../assets/IconBIM";
import { Link } from "react-router-dom";
const AutLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <div className="w-15 py-3">
          <IconBIM />
        </div>
        {/* text judul login/register */}
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        {/* text di bawa tombol */}
        <p className="font-medium text-slate-500">
          welcome, please enter your details
        </p>
        {/* ini adalah komponen yang di kirim dari pages */}
        {children}
        {/* ini jika menggunakan cara membuat komponen lain dengan if else */}
        <Navigasi title={title} />
        <p className="font-medium text-sm text-slate-500 text-center py-2">
          {title === "Login" ? " Don't have account? " : "Have account? "}

          {title === "Login" && (
            <Link to="/register" className="text-blue-700">
              Sign up
            </Link>
          )}

          {title === "Register" && (
            <Link to="/login" className="text-blue-700">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

const Navigasi = (props) => {
  const { title } = props;
  if (title === "Login") {
    return (
      <p className="font-medium text-sm text-slate-500 text-center py-2">
        Don't have account ?{" "}
        <Link to="/register" className="text-red-700">
          Sign up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="font-medium text-sm text-slate-500 text-center py-2">
        Have account ?{" "}
        <Link to="/login" className="text-red-700">
          Login
        </Link>
      </p>
    );
  }
};

export default AutLayout;
