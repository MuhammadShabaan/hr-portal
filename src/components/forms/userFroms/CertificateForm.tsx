import { useState, ChangeEvent, FormEvent } from "react";
import Input from "../../../shared/Input";
import Button from "../../../shared/Button";
import DropDown from "../../../shared/DropDown";
import {
  CreateUserCertificate,
  UpdateUserCertificate,
} from "@/services/CertificateService";

import { CreateCertificate } from "@/types/Types";

import pb from "@/services/PocketBase";

const CertificateForm: React.FC = ({
  certificateToUpdate,
  hideForm,
  updateData,
}: any): JSX.Element => {
  const user = pb.authStore.model;
  const role = user?.role;
  const options = [
    { id: 1, text: "certificate" },
    { id: 2, text: "letter" },
  ];

  const [selectedCertificate, setSelectedCertificate] =
    useState<any>("Select type");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({
    title: "",
  });
  const [selectedStatus, setSeletectedStatus] = useState<any>("Update Status");

  const [selectedFile, setSelectedFile] = useState<any>(null);

  const createForm = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  // <==== Update form
  const optionsToUpdate = [
    { id: 1, text: "pending" },
    { id: 2, text: "inprogress" },
    { id: 3, text: "uploaded" },
  ];

  const updateForm = new FormData();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files[0];
    setSelectedFile(file);
    // const files = fileInput.files;
    // if (files) {
    //   for (let file of files) {
    //     updateForm.append("file", file);
    //   }
    // } else {
    //   // :TODO Handle this gracefully
    // }
  };

  // console.log("updateform==>", updateForm);

  // ====>

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data: CreateCertificate = {
      title: formData.title,
      type: selectedCertificate.text,
      requested_by: user?.username,
      user_email: user?.email,
      status: "pending",
      user_id: user?.id,
    };

    updateForm.append("file", selectedFile);
    updateForm.append("status", selectedStatus?.text);

    const certificate =
      role === "employee"
        ? await CreateUserCertificate(data)
        : await UpdateUserCertificate(certificateToUpdate?.id, updateForm);

    if (certificate?.id) {
      if (certificate?.role === "employee") {
        setFormData({ title: "" });
        setSelectedCertificate("Select here");
        hideForm();
        updateData();
      } else {
        setSeletectedStatus("Update status");
        hideForm();
        updateData();
      }
    }
  };

  return (
    <div className="bg-neutral-200 rounded-md py-3 md:py-6 w-[542px] h-[600px] md:px-10 px-3 space-y-24 overflow-y-auto">
      <p className="text-center text-h1b md:text-h3r capitalize">
        {role === "employee" ? "Request Certificate" : "Upload Certificate"}
      </p>
      <div className="space-y-5">
        <form onSubmit={handleSubmit}>
          {role === "employee" ? (
            <Input
              label="Title"
              type="text"
              placeholder={"title"}
              value={formData.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                createForm("title", e.target.value)
              }
            />
          ) : (
            <input type="file" id="fileInput" onChange={handleFileChange} />
          )}

          <DropDown
            isOpen={isOpen}
            options={role === "employee" ? options : optionsToUpdate}
            openDropDown={() => setIsOpen(!isOpen)}
            selectedOption={
              role === "employee" ? selectedCertificate : selectedStatus
            }
            selectOption={(option: any) =>
              role === "employee"
                ? setSelectedCertificate(option)
                : setSeletectedStatus(option)
            }
          />

          <Button
            label={role === "employee" ? "request" : "Update"}
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

export default CertificateForm;
