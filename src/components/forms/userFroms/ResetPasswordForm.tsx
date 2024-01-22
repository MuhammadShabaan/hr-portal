import { setNewPassword } from "@/services/AuthService";
import Button from "@/shared/Button";
import Input from "@/shared/Input";
import React, { ChangeEvent, FormEvent, useState } from "react";

const ResetPasswordForm = () => {
  const [message, setMessage] = useState<string>("");

  // get token from params
  const token = "";
  const [credentials, setCredetials] = useState({
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredetials((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      credentials.newPassword.length < 8 ||
      credentials.newPasswordConfirm.length < 8
    ) {
      setMessage("Password must be alteast 8 letters long.");
      return;
    } else {
      try {
        const success = await setNewPassword(
          token,
          credentials.newPassword,
          credentials.newPasswordConfirm
        );

        console.log(success);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-400">
      <div className="px-3 py-3 rounded-md bg-white w-64">
        <p className="mb-8">Enter your email</p>
        <Input
          label="New Password"
          name="newPassword"
          value={credentials.newPassword}
          onChange={handleChange}
        />
        <Input
          label="Confirm Password"
          name="newPasswordConfirm"
          value={credentials.newPasswordConfirm}
          onChange={handleChange}
        />

        <Button label="Reset Password" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default ResetPasswordForm;
