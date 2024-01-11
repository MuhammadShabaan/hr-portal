import { ChangeEvent, FormEvent, useContext, useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";

import Pocketbase from "pocketbase";
import DropDown from "../shared/DropDown";
import { UserContext } from "../context/UserContext";

interface role {
  id: number;
  text: string;
}

interface FormData {
  email: string;
  role: string;
}

const CreateUser = ({ setHideUserModal, userType }: any) => {
  const { user }: any = useContext(UserContext);

  const defaulrole = [
    { id: 1, text: "admin" },
    { id: 2, text: "manager" },
    { id: 3, text: "employee" },
  ];

  let specificrole;

  if (user?.role === "manager") {
    specificrole = defaulrole.filter((role) => {
      return role.text !== "manager" && role.text !== "admin";
    });
  } else if (user?.role === "admin") {
    specificrole = defaulrole.filter((role) => {
      return role.text !== "admin";
    });
  }

  const [selectedRole, setSelectedRole] = useState<role | string>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const pb = new Pocketbase("http://127.0.0.1:8090");

  const [formData, setFormData] = useState<FormData>({
    email: "",
    role: "",
  });

  const createForm = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  console.log("user==>", user);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const username = formData.email.split("@")[0];
    const data = {
      username: username,
      email: formData.email,
      emailVisibility: true,
      password: "12345678",
      passwordConfirm: "12345678",
      name: "",
      nic: "",
      address: "",
      phone: "",
      emergency_phone: "",
      pay: "",
      joining_date: "",
      employee_status: "",
      job_type: "",
      blood_group: "",
      role: selectedRole?.text,
    };

    const user = await pb
      .collection("users")
      .create(data)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log("error", error);
      });

    if (user?.id) {
      const varifyEmail = await pb
        .collection("users")
        .requestPasswordReset(user?.email);
      console.log("verifyemail==>", varifyEmail);
      setFormData({ email: "", password: "" });
      setSelectedRole("Select here");
      setSuccessMessage(`New user with ${user?.email}`);
    }
  };
  return (
    <div className="flex items-center justify-center bg-slate-500/60 z-10 absolute top-0 left-0 bottom-0 right-0">
      <div className="bg-white px-8 py-4 w-96 rounded-md">
        <div className="">
          <div className="flex justify-end" onClick={setHideUserModal}>
            <Button label="x" />
          </div>
          <p className="text-center capitalize">Create new {userType}</p>
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
            <DropDown
              isOpen={isOpen}
              options={specificrole}
              openDropDown={() => setIsOpen(!isOpen)}
              selectedOption={selectedRole}
              selectOption={(role: any) => setSelectedRole(role)}
            />
            <Button
              label="Create"
              color={"primary-900"}
              disabled={false}
              onClick={handleSubmit}
            />
          </form>
          {successMessage?.length != 0 && <p>{successMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
