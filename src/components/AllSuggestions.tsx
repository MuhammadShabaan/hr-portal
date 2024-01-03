import { DeleteUserAllowance, DeleteUserSuggestion } from "@/api/user";
import Button from "@/model/Button";
import { FaEdit, FaRemoveFormat } from "react-icons/fa";
import useSWR from "swr";
import { DataTable } from "./tables/DataTable";
import { columns } from "./tables/SuggestionTable/columns";
import { useState } from "react";
import FormWrapper from "./FormWrapper";
import Suggestions from "./user/EmplSuggestion";

const AllSuggestions = ({ role }: any) => {
  const [showFrom, setShowForm] = useState<boolean>(false);
  const [suggestionToUpdate, setSuggestionToUpdate] = useState<any>({});

  console.log("showfrom", showFrom);
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
      {showFrom ? (
        <FormWrapper onClick={() => setShowForm(!showFrom)}>
          <Suggestions role={role} suggestionToUpdate={suggestionToUpdate} />
        </FormWrapper>
      ) : (
        <DataTable
          columns={columns}
          data={data?.items || {}}
          handleDelete={(id: string) => deleteSuggestion(id)}
          handleEdit={(sugeestion) => {
            setSuggestionToUpdate(sugeestion);
            setShowForm(!showFrom);
          }}
        />
      )}
    </div>
  );
};

export default AllSuggestions;
