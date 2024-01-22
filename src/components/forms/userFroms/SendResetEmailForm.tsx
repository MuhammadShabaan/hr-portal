import { resetPassword } from "@/services/AuthService";
import Button from "@/shared/Button";
import Input from "@/shared/Input";
import { ChangeEvent, FormEvent, useState } from "react";

const SendResetEmailForm = () => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage("Your email is not correct!");
      return;
    } else {
      try {
        const sendMail = await resetPassword(email);
        setMessage("Sent! Please check your email.");
        setEmail("");
        console.log("sendMail===>", sendMail);
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
          label="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <Button label="Send" onClick={handleSubmit} />
        {message.length < 0 && <p>{message}</p>}
      </div>
    </div>
  );
};

export default SendResetEmailForm;
