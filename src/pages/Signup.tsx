import LoginImageSection from "../components/login/LoginImageSection";
import SignupForm from "../components/forms/signupForm/SignupForm";

const Signup = () => {
  return (
    <div className="bg-primary-800 w-screen h-screen flex items-center justify-center">
      <div className="flex justify-between items-center gap-20">
        <LoginImageSection userType={"admin"} />
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
