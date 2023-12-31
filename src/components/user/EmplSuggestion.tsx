import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Button from "../../model/Button";
import { UserContext } from "@/context/UserContext";
import DropDown from "../../model/DropDown";
import TextArea from "../../model/TextArea";
import { CreateUserSuggestion } from "@/api/user";

const Suggestions: React.FC = ({ hideForm }: any): JSX.Element => {
  const options = [
    { id: 1, text: "complain" },
    { id: 2, text: "suggestion" },
  ];
  const [selectedSuggestion, setSelectedSuggestion] =
    useState<any>("Select type");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { user }: any = useContext(UserContext);

  const [formData, setFormData] = useState<any>({
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

    const data = {
      user_id: user?.user_id,
      description: formData.description,
      type: selectedSuggestion.text,
    };
    const suggestion = await CreateUserSuggestion(data);

    if (suggestion?.id) {
      setFormData({
        description: "",
      });
      setSelectedSuggestion("Select here");
      hideForm();
    }
  };

  return (
    <div className="bg-neutral-200 rounded-md py-3 md:py-6 w-[542px] h-[600px] md:px-10 px-3 space-y-24 overflow-y-auto">
      <p className="text-center text-h1b md:text-h3r capitalize">Suggestion</p>
      <div className="space-y-5">
        <form onSubmit={handleSubmit}>
          <DropDown
            isOpen={isOpen}
            options={options}
            openDropDown={() => setIsOpen(!isOpen)}
            selectedOption={selectedSuggestion}
            selectOption={(option: any) => setSelectedSuggestion(option)}
          />
          <TextArea
            label="Description"
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

export default Suggestions;
