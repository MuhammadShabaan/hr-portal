import { DeleteUserSuggestion } from "@/api/user";
import useSWR from "swr";
import { DataTable } from "../dataTable/DataTable";
import { SuggestionsColumns } from "../dataTableColumns/SuggestionsColumn";
import { useState } from "react";
import FormWrapper from "../../FormWrapper";
import Suggestions from "../../forms/userForms/SuggestionForm";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import { UserSuggestion } from "@/types/Types";

const AllSuggestions: React.FC = ({ role }: any): JSX.Element => {
  const [showFrom, setShowForm] = useState<boolean>(false);
  const [suggestionToUpdate, setSuggestionToUpdate] =
    useState<UserSuggestion>();
  const { toast } = useToast();

  const fetcher = async (
    url: string
  ): Promise<UserSuggestion[] | undefined> => {
    const response = await fetch(url);
    const data = await response.json();
    return data?.items;
  };

  const {
    data: suggestions,
    error,
    isLoading,
  } = useSWR(
    `http://127.0.0.1:8090/api/collections/suggestions/records`,
    fetcher
  );

  const deleteSuggestion = async (suggestionId: string): Promise<void> => {
    const deletedSuggestion = await DeleteUserSuggestion(suggestionId);

    if (deletedSuggestion === undefined) {
      toast({
        title: "Success",
        description: "Deleted Successfully",
      });
    } else {
      toast({
        title: "Failure",
        description: "Unable to delete",
      });
    }
  };

  return (
    <div>
      <Toaster />
      {showFrom ? (
        <FormWrapper onClick={(): void => setShowForm(!showFrom)}>
          <Suggestions role={role} suggestionToUpdate={suggestionToUpdate} />
        </FormWrapper>
      ) : (
        <DataTable
          columns={SuggestionsColumns}
          data={suggestions || {}}
          handleDelete={(id: string) => deleteSuggestion(id)}
          handleEdit={(sugeestion: UserSuggestion): void => {
            setSuggestionToUpdate(sugeestion);
            setShowForm(!showFrom);
          }}
        />
      )}
    </div>
  );
};

export default AllSuggestions;
