import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import Pocketbase from "pocketbase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/context/UserContext";
import DropDown from "./DropDown";

const Certificate: React.FC = (): JSX.Element => {
  const pb = new Pocketbase("http://127.0.0.1:8090");
  console.log("certificagte component");

  const options = [
    { id: 1, text: "certificate" },
    { id: 2, text: "letter" },
  ];
  const [selectedCertificate, setSelectedCertificate] =
    useState<any>("Select type");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { user, setUser }: any = useContext(UserContext);

  const [formData, setFormData] = useState<any>({
    title: "",
  });

  //   const navigate = useNavigate();

  const createForm = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  console.log("updated user==> ", formData);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data = {
      title: formData.title,
      type: selectedCertificate.text,
    };

    const record = await pb
      .collection("certificate")
      .create(data)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log("error", error);
      });

    console.log("certificate request sent", record);

    if (record?.id) {
      setFormData({ title: "" });
      setSelectedCertificate("Select here");
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

export default Certificate;
