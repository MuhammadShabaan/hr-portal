import LoginImageSection from "../components/LoginImageSection";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="bg-primary-800 w-screen h-screen flex items-center justify-center">
      <div className="flex justify-between items-center gap-20">
        <LoginImageSection userType={"admin"} />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
