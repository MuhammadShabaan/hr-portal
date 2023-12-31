import { useState, ChangeEvent, FormEvent } from "react";
import Input from "../../model/Input";
import Button from "../../model/Button";
import DropDown from "../../model/DropDown";
import { CreateCertRequest } from "../../api/user";

const EmpCertificateForm: React.FC = ({ hideForm }: any): JSX.Element => {
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

  const createForm = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data = {
      title: formData.title,
      type: selectedCertificate.text,
    };

    const certificate = await CreateCertRequest(data);
    console.log("certificate ", certificate);
    if (certificate?.id) {
      setFormData({ title: "" });
      setSelectedCertificate("Select here");
      hideForm();
    }
  };

  return (
    <div className="bg-neutral-200 rounded-md py-3 md:py-6 w-[542px] h-[600px] md:px-10 px-3 space-y-24 overflow-y-auto">
      <p className="text-center text-h1b md:text-h3r capitalize">
        Request Certificate
      </p>
      <div className="space-y-5">
        <form onSubmit={handleSubmit}>
          <Input
            label="Title"
            type="text"
            placeholder={"title"}
            value={formData.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              createForm("title", e.target.value)
            }
          />
          <DropDown
            isOpen={isOpen}
            options={options}
            openDropDown={() => setIsOpen(!isOpen)}
            selectedOption={selectedCertificate}
            selectOption={(option: any) => setSelectedCertificate(option)}
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

export default EmpCertificateForm;
