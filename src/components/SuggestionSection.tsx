import { useState } from "react";
import Button from "../model/Button";
import FormWrapper from "./FormWrapper";
import Suggestions from "./user/EmplSuggestion";
import useSWR from "swr";
import AllSuggestions from "./AllSuggestions";

const SuggestionSection = () => {
  return (
    <div className="py-5 px-6">
      <div>Suggestions Section</div>
      <div className="w-[600px] h-[400px] rounded-md bg-white mb-4">
        <div className="flex items-center justify-end">
          <Button label="Request Suggestion" />
        </div>{" "}
        <AllSuggestions />
      </div>
    </div>
  );
};

export default SuggestionSection;
