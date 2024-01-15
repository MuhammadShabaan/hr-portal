// :TODO Need to do this Login with pocketbase sdk


import { useState, ChangeEvent, FormEvent} from "react";
import Input from "../../../shared/Input";
import Button from "../../../shared/Button";
import { useNavigate } from "react-router-dom";
import { Login } from "../../../types/Types";

import { login } from "@/services/AuthService"; 
import { useAuth } from "@/context/AuthContext";

const LoginForm: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const {token} = useAuth()
  if(token){
    navigate("/updateinfo")
  }
  const [formData, setFormData] = useState<Login>({
    email: "",
    password: "",
  });

  const createForm = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const {email, password} = formData;
    const user = await login(email,password);

    if (user != null && user != undefined) {
      navigate("/updateinfo");
    } else {
      console.log("Error while logging in user");
    }
  };

  return (
    <div className="bg-neutral-200 rounded-md py-3 md:py-6 w-[542px] h-[600px] md:px-10 px-3 space-y-24">
      <p className="text-center text-h1b md:text-h3r capitalize">Login</p>
      <div className="space-y-5">
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="text"
            placeholder={"xyz@example.com"}
            value={formData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("email", e.target.value)
            }
          />
          <Input
            label="Password"
            type="password"
            value={formData.password}
            placeholder={"password"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("password", e.target.value)
            }
          />

          <Button
            label="Login"
            color={"primary-900"}
            disabled={false}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
