import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { FaHome } from "react-icons/fa";

const SignupForm = () => {
  const [confirmPassword, setConfirmPassword] = useState<any>("");
  console.log("conform passwod==>", confirmPassword);
  const [formData, setFormData] = useState<any>({
    username: "",
    email: "",
    password: "",
  });

  const createForm = (key: any, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-neutral-200 rounded-md py-3 md:py-6 w-[542px] h-[600px] md:px-10 px-3 space-y-18">
      <p className="text-center text-h1b md:text-h3r capitalize">Sign-Up</p>
      <div className="space-y-5">
        <form onSubmit={handleSubmit}>
          <Input
            label="Username"
            type="text"
            placeholder={"john doe"}
            value={formData.username}
            onChange={(e) => createForm("username", e.target.value)}
          />
          <Input
            label="Email"
            type="text"
            placeholder={"xyz@example.com"}
            value={formData.email}
            onChange={(e) => createForm("email", e.target.value)}
          />
          <Input
            label="Confirm Password"
            type="password"
            value={formData.password}
            placeholder={"password"}
            onChange={(e) => createForm("password", e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            value={confirmPassword}
            placeholder={"confirm password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button
            icon={<FaHome />}
            label="next"
            color={"primary-900"}
            disabled={true}
          />
        </form>
        <p className="text-center text-sm sm:text-base">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
