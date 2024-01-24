import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Input from "../../../shared/Input";
import Button from "../../../shared/Button";
import {
  CreateUserAllowance,
  UpdateUserAllowance,
} from "@/services/AllowanceService";

import TextArea from "@/shared/TextArea";
import { CreateAllowance } from "@/types/Types";
import pb from "@/services/PocketBase";
import DropDown from "@/shared/DropDown";

const AllowanceForm = ({ hideForm, selectedAllowance, updateData }: any) => {
  const user = pb.authStore.model;
  const role = user?.role;
  const allowanceId = selectedAllowance?.id;

  const optionsToUpdate = [
    { id: 1, text: "requested" },
    { id: 2, text: "approved" },
    { id: 3, text: "archived" },
    { id: 4, text: "rejected" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any>("Updated Status");

  const [formData, setFormData] = useState<any>({
    requested_allowance: "",
    description: "",
  });

  const [approvedAllowance, setApprovedAllowance] = useState<any>("");

  const createForm = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data: CreateAllowance = {
      requested_allowance: Number(formData.requested_allowance),
      user_id: user?.id,
      requested_by: user?.username,
      status: "requested",
      description: formData.description,
      user_email: user?.email,
    };

    const updatedData = {
      status: selectedOption?.text,
      approved_allowance: Number(approvedAllowance),
    };

    const allowance =
      role === "employee"
        ? await CreateUserAllowance(data)
        : await UpdateUserAllowance(allowanceId, updatedData);

    if (allowance?.id) {
      if (role === "employee") {
        setFormData({ allowance_amount: "", description: "" });
        updateData();
        hideForm();
      } else {
        setApprovedAllowance("");
        updateData();
        hideForm();
      }
    }
  };

  return (
    <div className="bg-neutral-200 rounded-md py-3 md:py-6 w-[542px] h-[600px] md:px-10 px-3 space-y-24 overflow-y-auto">
      <p className="text-center text-h1b md:text-h3r capitalize">
        {role === "employee" ? "Request Allowance" : "Update Allowance"}
      </p>
      <div className="space-y-5">
        <form onSubmit={handleSubmit}>
          {role === "employee" ? (
            <>
              <Input
                label="Allowance Amount"
                type="text"
                placeholder={"Request amount"}
                value={formData.requested_allowance}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  createForm("requested_allowance", e.target.value)
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
            </>
          ) : (
            <>
              <p> Requested amount: {user?.allowance_amount}</p>
              <br />
              <Input
                name="approved_amount"
                onChange={(e: ChangeEvent<HTMLFormElement>) =>
                  setApprovedAllowance(e.target.value)
                }
                label="Approved Amouunt"
                value={approvedAllowance}
                placeholder="Enter approved amount"
              />
              <DropDown
                isOpen={isOpen}
                options={optionsToUpdate}
                openDropDown={() => setIsOpen(!isOpen)}
                selectedOption={selectedOption}
                selectOption={(option: any) => setSelectedOption(option)}
              />
            </>
          )}

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
