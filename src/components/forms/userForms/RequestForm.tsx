import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Button from "../../../shared/Button";
import DropDown from "../../../shared/DropDown";
import { CreateUserRequest, UpdateUserRequest } from "../../../api/user";
import TextArea from "../../../shared/TextArea";
import { CreateRequest, UpdateRequest } from "@/types/Types";
import { useAuth } from "@/context/AuthContext";

const RequestForm: React.FC = ({
  requestToUpdate,
  role,
  hideForm,
}: any): JSX.Element => {
  const options = [
    { id: 1, text: "leave" },
    { id: 2, text: "short leave" },
    { id: 3, text: "work from home" },
    { id: 4, text: "allowance" },
  ];

  const status = [
    { id: 1, text: "pending" },
    { id: 2, text: "accepted" },
    { id: 3, text: "declined" },
  ];

  const [selectedRequest, setSelectedRequest] = useState<any>("Select type");
  const [selectedStatus, setSelectedStatus] = useState<any>("Select status");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { user } = useAuth()

  const [formData, setFormData] = useState<any>({
    description: "",
    status: "pending",
  });

  const [updateFormData, setUpdateFormData] = useState<any>({
    note: "",
  });

  const createForm = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const updateForm = (key: string, value: string): void => {
    setUpdateFormData({
      ...updateFormData,
      [key]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data: CreateRequest = {
      user_id: user?.id,
      requested_by: user?.username,
      user_email: user?.email,
      request_type: selectedRequest?.text,
      description: formData.description,
      status: formData.status,
    };

    const updatedData: UpdateRequest = {
      status: selectedStatus.text,
      note: updateFormData.note,
    };

    const request =
      role === "employee"
        ? await CreateUserRequest(data)
        : await UpdateUserRequest(requestToUpdate?.id, updatedData);
    note: "";
    if (request?.id) {
      if (role === "employee") {
        setFormData({
          description: "",
          status: "pending",
        });
        setSelectedRequest("Select request type");
        hideForm();
      } else {
        setUpdateFormData({ note: "" });
        hideForm();
      }
    }
  };

  return (
    <div className="bg-neutral-200 rounded-md py-3 md:py-6 w-[542px] h-[600px] md:px-10 px-3 space-y-24 overflow-y-auto">
      <p className="text-center text-h1b md:text-h3r capitalize">
        {role === "manager" ? "Update Request" : "Send Request"}
      </p>
      <div className="space-y-5">
        <form onSubmit={handleSubmit}>
          <DropDown
            isOpen={isOpen}
            options={role === "employee" ? options : status}
            openDropDown={() => setIsOpen(!isOpen)}
            selectedOption={
              role === "employee" ? selectedRequest : selectedStatus
            }
            selectOption={
              role === "employee"
                ? (option: any) => setSelectedRequest(option)
                : (option: any) => setSelectedStatus(option)
            }
          />

          <TextArea
            label={role === "employee" ? "Description" : "Note For Employee"}
            value={
              role === "employee" ? formData.description : updateFormData.note
            }
            onChange={
              role === "employee"
                ? (e: ChangeEvent<HTMLInputElement>) =>
                    createForm("description", e.target.value)
                : (e: ChangeEvent<HTMLInputElement>) =>
                    updateForm("note", e.target.value)
            }
          />

          <Button
            label={role === "employee" ? "Request" : "Update"}
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

export default RequestForm;
