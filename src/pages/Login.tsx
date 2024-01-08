import React from "react";
import LoginImageSection from "../components/login/LoginImageSection";
import LoginForm from "../components/forms/loginForm/LoginForm";

const Login: React.FC = (): JSX.Element => {
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
