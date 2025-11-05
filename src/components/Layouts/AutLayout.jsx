import IconBIM from "../../assets/IconBIM";

const AutLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <div className="w-15 py-3">
          <IconBIM />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500">
          welcome, please enter your details
        </p>
        {children}
      </div>
    </div>
  );
};

export default AutLayout;
