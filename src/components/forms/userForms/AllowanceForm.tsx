import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Input from "../../../model/Input";
import Button from "../../../model/Button";
import { CreateUserAllowance } from "../../../api/user";
import { UserContext } from "@/context/UserContext";
import TextArea from "@/model/TextArea";
import { CreateAllowance } from "@/types/Types";

const AllowanceForm = ({ hideForm }: any) => {
  const { user }: any = useContext(UserContext);

  const [formData, setFormData] = useState<any>({
    allowance_amount: "",
    description: "",
  });

  const createForm = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data: CreateAllowance = {
      allowance_amount: Number(formData.allowance_amount),
      user_id: user?.id,
      requested_by: user?.username,
      status: "requested",
      description: formData.description,
      user_email: user?.email,
    };

    const allowance = await CreateUserAllowance(data);

    if (allowance?.id) {
      setFormData({ allowance_amount: "", description: "" });
      hideForm();
    }
  };

  return (
    <div className="bg-neutral-200 rounded-md py-3 md:py-6 w-[542px] h-[600px] md:px-10 px-3 space-y-24 overflow-y-auto">
      <p className="text-center text-h1b md:text-h3r capitalize">
        Request Allowance
      </p>
      <div className="space-y-5">
        <form onSubmit={handleSubmit}>
          <Input
            label="Allowance Amount"
            type="text"
            placeholder={"Reques amount"}
            value={formData.allowance_amount}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("allowance_amount", e.target.value)
            }
          />
          <TextArea
            label="Description"
            placeholder="Type here..."
            value={formData.description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              createForm("description", e.target.value)
            }
          />

          <Button
            label="Apply"
            color={"primary-900"}
            disabled={false}
            onClick={handleSubmit}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AllowanceForm;
