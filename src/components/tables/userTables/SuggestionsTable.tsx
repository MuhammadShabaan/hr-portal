import {
  DeleteUserSuggestion,
  GetSuggestions,
} from "@/services/SuggestionService";
import useSWR from "swr";
import { DataTable } from "../dataTable/DataTable";
import { SuggestionsColumns } from "../dataTableColumns/SuggestionsColumn";
import { useState } from "react";
import FormWrapper from "../../FormWrapper";
import Suggestions from "../../forms/userFroms/SuggestionForm";
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

  const fetcherString = "suggestions";
  const {
    data: suggestions,
    IsError,
    isLoading,
    mutate,
  } = useSWR(fetcherString, GetSuggestions);

  const suggestionsColumns = SuggestionsColumns(role);

  const deleteSuggestion = async (suggestionId: string): Promise<void> => {
    const deletedSuggestion = await DeleteUserSuggestion(suggestionId);

    if (deletedSuggestion) {
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

  const mutateAfterAdditon = () => {
    mutate();
    toast({
      title: "Success",
      description: "Suggestion sent succsessfully",
    });
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
            updateData={() => mutateAfterAdditon()}
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
