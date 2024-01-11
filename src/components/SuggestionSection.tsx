import { useContext, useState } from "react";
import Button from "../shared/Button";
import AllSuggestions from "./tables/userTables/SuggestionsTable";
import FormWrapper from "./FormWrapper";
import CertificateForm from "./forms/userForms/CertificateForm";
import SuggestionForm from "./forms/userForms/SuggestionForm";
import { UserContext } from "@/context/UserContext";

const SuggestionSection = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="py-5 px-6">
      <div>Suggestions Section</div>
      <div className="w-[600px] h-[400px] rounded-md bg-white mb-4">
        {/* <div className="flex items-center justify-end">
          <Button label="Request Suggestion" onClick={() => setShow(!show)} />
        </div>{" "} */}
        <AllSuggestions />
      </div>
    </div>
  );
};

export default SuggestionSection;
