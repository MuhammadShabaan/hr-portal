import React, { useState } from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import Pocketbase from "pocketbase";
import DropDown from "../components/DropDown";

const User = () => {
  const [user, setUser] = useState<any>(() => {
    const savedUser: any = window.localStorage.getItem("user");
    return JSON.parse(savedUser);
  });

  const options = [
    { id: 1, text: "admin" },
    { id: 2, text: "manager" },
    { id: 3, text: "employee" },
  ];
  const [selectedRole, setSelectedRole] = useState<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<any>();

  const pb = new Pocketbase("http://127.0.0.1:8090");

  const [formData, setFormData] = useState<any>({
    email: "",
    roles: "",
  });

  const createForm = (key: any, value: any) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  console.log("user==>", user);

  const handleSubmit = async (e: any) => {
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
      roles: selectedRole.text,
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
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="">
        <p>{user.roles} page</p>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            type="text"
            placeholder={"xyz@example.com"}
            value={formData.email}
            onChange={(e) => createForm("email", e.target.value)}
          />
          <DropDown
            isOpen={isOpen}
            options={options}
            openDropDown={() => setIsOpen(!isOpen)}
            selectedOption={selectedOption}
            selectOption={(option) => setSelectedOption(option)}
          />
          <Button
            label="next"
            color={"primary-900"}
            disabled={false}
            onClick={handleSubmit}
          />
        </form>
        {successMessage?.length != 0 && <p>{successMessage}</p>}
      </div>
    </div>
  );
};

export default User;
