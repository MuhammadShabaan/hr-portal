import { useState } from "react";
import Button from "../model/Button";
import FormWrapper from "./FormWrapper";
import Suggestions from "./user/EmplSuggestion";
import useSWR from "swr";
import AllSuggestions from "./AllSuggestions";

const SuggestionSection = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="py-5 px-6">
      <div>Suggestions Section</div>
      <div className="w-[600px] h-[400px] rounded-md bg-white mb-4">
        <div className="flex items-center justify-end">
          <Button label="Request Suggestion" onClick={() => setShow(true)} />
        </div>{" "}
        <AllSuggestions />
      </div>
      {show && (
        <FormWrapper onClick={() => setShow(false)}>
          <Suggestions hideForm={() => setShow(false)} />
        </FormWrapper>
      )}
    </div>
  );
};

export default SuggestionSection;
