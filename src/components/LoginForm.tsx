import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import TabButton from "./TabButton";
import { FaHome } from "react-icons/fa";
import DropDown from "./DropDown";
import Pocketbase from "pocketbase";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const pb = new Pocketbase("http://127.0.0.1:8090");
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const createForm = (key: any, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loggedInUser = await pb
      .collection("users")
      .authWithPassword(formData.email, formData.password)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log("error===>", error);
      });
    if (loggedInUser?.record?.id) {
      window.localStorage.setItem("user", JSON.stringify(loggedInUser.record));
      navigate("/dashboard");
    }
    // console.log("authData====>", loggedInUser.record);
    // const username = formData.email.split("@")[0];
    // const data = {
    //   username: username,
    //   email: formData.email,
    //   emailVisibility: true,
    //   password: formData.password,
    //   passwordConfirm: formData.password,
    //   roles: "manager",
    // };
    // const user = await pb
    //   .collection("users")
    //   .create(data)
    //   .then((result) => {
    //     return result;
    //   })
    //   .catch((error) => {
    //     console.log("error catch==========,", error.response);
    //   });

    // if (user?.id) {
    //   window.localStorage.setItem("user", JSON.stringify(user));
    //   navigate("/dashboard");
    // }
  };

  // const options = [
  //   { id: 0, text: "hello" },
  //   { id: 1, text: "hello1" },
  //   { id: 2, text: "hello2" },
  // ];

  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // const [selectedOption, setSelectedOption] = useState<any>(options[0]);

  // const [errorMessage, setErrorMessage] = useState<any>();

  //   console.log(formData);
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
            onChange={(e) => createForm("email", e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            value={formData.password}
            placeholder={"password"}
            onChange={(e) => createForm("password", e.target.value)}
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
