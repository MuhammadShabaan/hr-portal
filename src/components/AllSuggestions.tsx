import { DeleteUserAllowance, DeleteUserSuggestion } from "@/api/user";
import Button from "@/model/Button";
import { FaEdit, FaRemoveFormat } from "react-icons/fa";
import useSWR from "swr";

const AllSuggestions = () => {
  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8090/api/collections/suggestions/records`,
    fetcher
  );
  const deleteSuggestion = async (suggestionId: any): Promise<any> => {
    const deletedSuggestion = await DeleteUserSuggestion(suggestionId);
    if (deletedSuggestion === undefined) {
      console.log(`Suggestion with id:${suggestionId} deleted successfully!`);
    }
  };
  return (
    <div>
      {data?.items?.map(({ id, description, response, type }: any) => (
        <div
          key={id}
          className="flex items-center justify-between mb-2 bg-slate-500"
        >
          <p>{description}</p>
          <p>{type}</p>
          <p>{response}</p>
          <div className="flex items-center justify-between">
            <Button icon={<FaEdit />} />
            <Button
              icon={<FaRemoveFormat />}
              color="red-800"
              onClick={() => deleteSuggestion(id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllSuggestions;
