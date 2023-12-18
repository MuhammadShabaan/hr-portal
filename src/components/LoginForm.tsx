import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import Pocketbase from "pocketbase";
import { useNavigate } from "react-router-dom";
import { LoginFormInterface } from "../types/Types";
import { UserContext } from "@/context/UserContext";

const LoginForm: React.FC = (): JSX.Element => {
  const pb = new Pocketbase("http://127.0.0.1:8090");

  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState<LoginFormInterface>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const createForm = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const loggedInUser = await pb
      .collection("users")
      .authWithPassword(formData.email, formData.password)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log("error", error);
      });

    if (loggedInUser != null && loggedInUser != undefined) {
      window.localStorage.setItem("user", JSON.stringify(loggedInUser.record));
      setUser(loggedInUser.record);
      navigate("/dashboard");
    } else {
      console.log("Can not store null or undefined value in local sotrage");
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
