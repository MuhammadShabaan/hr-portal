import { DeleteUserSuggestion } from "@/services/SuggestionService";
import useSWR from "swr";
import { DataTable } from "../dataTable/DataTable";
import { SuggestionsColumns } from "../dataTableColumns/SuggestionsColumn";
import { useState } from "react";
import FormWrapper from "../../FormWrapper";
import Suggestions from "../../forms/userForms/SuggestionForm";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import { UserSuggestion } from "@/types/Types";
import Button from "@/shared/Button";

import pb from "@/services/PocketBase";

const AllSuggestions: React.FC = (): JSX.Element => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [suggestionToUpdate, setSuggestionToUpdate] =
    useState<UserSuggestion>();

  const { toast } = useToast();

  const user = pb.authStore.model;
  const role: string = user?.role;

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
    mutate,
  } = useSWR(
    `http://127.0.0.1:8090/api/collections/suggestions/records`,
    fetcher
  );

  const suggestionsColumns = SuggestionsColumns(role);

  const deleteSuggestion = async (suggestionId: string): Promise<void> => {
    const deletedSuggestion = await DeleteUserSuggestion(suggestionId);

    if (deletedSuggestion) {
      mutate();
      toast({
        title: "Success",
        description: "Deleted Successfully",
      });

      mutate();
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
      <div className="flex items-center justify-end">
        {role === "employee" && (
          <Button
            label="Request Suggestion"
            onClick={() => setShowForm(!showForm)}
          />
        )}
      </div>{" "}
      {showForm && (
        <FormWrapper onClick={(): void => setShowForm(!showForm)}>
          <Suggestions
            role={role}
            suggestionToUpdate={suggestionToUpdate}
            hideForm={(): void => setShowForm(!showForm)}
          />
        </FormWrapper>
      )}
      <DataTable
        columns={suggestionsColumns}
        data={suggestions || {}}
        handleDelete={(id: string) => deleteSuggestion(id)}
        handleEdit={(suggestion: UserSuggestion): void => {
          setSuggestionToUpdate(suggestion);
          setShowForm(!showForm);
        }}
      />
    </div>
  );
};

export default AllSuggestions;
