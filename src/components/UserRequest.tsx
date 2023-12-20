import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import Pocketbase from "pocketbase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/context/UserContext";
import DropDown from "./DropDown";

const UserRequest: React.FC = (): JSX.Element => {
  const pb = new Pocketbase("http://127.0.0.1:8090");

  const options = [
    { id: 1, text: "leave" },
    { id: 2, text: "short leave" },
    { id: 3, text: "work from home" },
    { id: 4, text: "allowance" },
  ];
  const [selectedRequest, setSelectedRequest] = useState<any>("Select type");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { user }: any = useContext(UserContext);

  const [formData, setFormData] = useState<any>({
    description: "",
    status: "pending",
  });

  //   const navigate = useNavigate();

  const createForm = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  console.log("form==> ", formData);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data = {
      user_id: user?.user_id,
      request_type: selectedRequest.text,
      description: formData.description,
      status: formData.status,
    };

    const record = await pb
      .collection("user_request")
      .create(data)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log("error", error);
      });

    console.log("suggestion", record);

    if (record?.id) {
      setFormData({
        description: "",
        status: "pending",
      });
      setSelectedRequest("Select request type");
    }
  };

  return (
    <div className="bg-neutral-200 rounded-md py-3 md:py-6 w-[542px] h-[600px] md:px-10 px-3 space-y-24 overflow-y-auto">
      <p className="text-center text-h1b md:text-h3r capitalize">Request</p>
      <div className="space-y-5">
        <form onSubmit={handleSubmit}>
          <DropDown
            isOpen={isOpen}
            options={options}
            openDropDown={() => setIsOpen(!isOpen)}
            selectedOption={selectedRequest}
            selectOption={(option: any) => setSelectedRequest(option)}
          />

          <Input
            label="Description"
            type="text"
            placeholder={"type here ..."}
            value={formData.description}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("description", e.target.value)
            }
          />

          <Button
            label="Request"
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

export default UserRequest;
