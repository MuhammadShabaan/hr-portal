import useSWR from "swr";
import React, { useState } from "react";
import FormWrapper from "../../FormWrapper";
import { DeleteUserRequest, GetRequests } from "@/services/RequestService";
import { DataTable } from "../dataTable/DataTable";
import { RequestsColumns } from "../dataTableColumns/RequestsColumn";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import RequestForm from "../../forms/userFroms/RequestForm";
import Button from "@/shared/Button";
import pb from "@/services/PocketBase";

const AllRequests: React.FC = (): JSX.Element => {
  const user = pb.authStore.model;
  const [showForm, setShowForm] = useState<boolean>(false);
  const [requestToUpdate, setRequestToUpdate] = useState<any>();
  const { toast } = useToast();

  const role: string = user?.role;

  const fetcherString = "requests";
  const {
    data: requests,
    IsError,
    isLoading,
    mutate,
  } = useSWR(fetcherString, GetRequests);

  const requestsColumns = RequestsColumns(role);

  const deteleRequest = async (requestId: string): Promise<void> => {
    const deletedRequest = await DeleteUserRequest(requestId);
    if (deletedRequest) {
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
      {role === "employee" && (
        <div className="flex items-center justify-end">
          <Button label="Send Request" onClick={() => setShowForm(!showForm)} />
        </div>
      )}
      {showForm && (
        <FormWrapper onClick={(): void => setShowForm(!showForm)}>
          <RequestForm
            requestToUpdate={requestToUpdate}
            role={role}
            hideForm={() => setShowForm(!showForm)}
            updateData={() => mutateAfterAdditon()}
          />
        </FormWrapper>
      )}

      <DataTable
        columns={requestsColumns}
        data={requests || {}}
        handleDelete={(id: string) => deteleRequest(id)}
        handleEdit={(request) => {
          setRequestToUpdate(request);
          setShowForm(!showForm);
        }}
      />
    </div>
  );
};

export default AllRequests;
