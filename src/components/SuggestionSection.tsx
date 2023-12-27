import { useState } from "react";
import Button from "../model/Button";
import FormWrapper from "./FormWrapper";
import Suggestions from "./user/EmplSuggestion";
import useSWR from "swr";

const SuggestionSection = () => {
  const [show, setShow] = useState<boolean>(false);

  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8090/api/collections/suggestions/records`,
    fetcher
  );

  console.log("suggestions", data?.items);

  return (
    <div className="py-5 px-6">
      <div>Suggestions Section</div>
      <div className="w-[600px] h-[400px] rounded-md bg-white mb-4">
        <div className="flex items-center justify-end">
          <Button label="Request Suggestion" onClick={() => setShow(true)} />
        </div>{" "}
        <div>
          {data?.items?.map((suggestion: any) => (
            <div
              key={suggestion.id}
              className="flex items-center justify-between "
            >
              <p>{suggestion.description}</p>
              <p>{suggestion.response}</p>
            </div>
          ))}
        </div>
      </div>
      {show && (
        <FormWrapper onClick={() => setShow(false)}>
          <Suggestions />
        </FormWrapper>
      )}
    </div>
  );
};

export default SuggestionSection;
