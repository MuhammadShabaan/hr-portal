import { useState, ChangeEvent, FormEvent, useContext } from "react";
import Button from "../../model/Button";
import { UserContext } from "@/context/UserContext";
import DropDown from "../../model/DropDown";
import TextArea from "../../model/TextArea";
import { CreateUserSuggestion, UpdateUserSuggestion } from "@/api/user";

const Suggestions: React.FC = ({
  role,
  suggestionToUpdate,
}: any): JSX.Element => {
  console.log("role", role);
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

  const [addNote, setAddNote] = useState<any>({
    response: "",
  });

  const createForm = (key: string, value: string): void => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const updateForm = (key: string, value: string): void => {
    setAddNote({
      ...addNote,
      [key]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const data = {
      user_id: user?.user_id,
      description: formData.description,
      type: selectedSuggestion.text,
      suggested_by: user?.username,
      user_email: user?.email,
    };

    const updateData = {
      response: addNote.response,
    };

    const suggestion =
      role === "manager"
        ? await UpdateUserSuggestion(suggestionToUpdate.id, updateData)
        : await CreateUserSuggestion(data);

    if (suggestion?.id) {
      setFormData({
        description: "",
      });
      setSelectedSuggestion("Select here");
    }
  };

  return (
    <div className="bg-neutral-200 rounded-md py-3 md:py-6 w-[542px] h-[600px] md:px-10 px-3 space-y-24 overflow-y-auto">
      <p className="text-center text-h1b md:text-h3r capitalize">
        {role === "manager" ? "Responsd to Employee Suggestion" : "Sugeestion"}
      </p>
      <div className="space-y-5">
        <form onSubmit={handleSubmit}>
          {role === "employee" && (
            <DropDown
              isOpen={isOpen}
              options={options}
              openDropDown={() => setIsOpen(!isOpen)}
              selectedOption={selectedSuggestion}
              selectOption={(option: any) => setSelectedSuggestion(option)}
            />
          )}
          {/* <TextArea
            label={role === "manager" ? "Add Note" : "Description"}
            value={role === "manager" ? addNote.note : formData.description}
            onChange={
              role === "manager"
                ? (e: ChangeEvent<HTMLInputElement>) =>
                    updateForm("note", e.target.value)
                : (e: ChangeEvent<HTMLInputElement>) =>
                    createForm("description", e.target.value)
            }
          /> */}
          {role === "manager" && (
            <div className="text-gray-500">
              <p>Suggstion</p>
              <p>{suggestionToUpdate.description}</p>
            </div>
          )}
          <TextArea
            label={role === "manager" ? "Add Note" : "Description"}
            value={role === "manager" ? addNote.response : formData.description}
            onChange={
              role === "manager"
                ? (e: ChangeEvent<HTMLInputElement>) =>
                    updateForm("response", e.target.value)
                : (e: ChangeEvent<HTMLInputElement>) =>
                    createForm("description", e.target.value)
            }
          />

          <Button
            label={role === "manager" ? "Update" : "Send"}
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
