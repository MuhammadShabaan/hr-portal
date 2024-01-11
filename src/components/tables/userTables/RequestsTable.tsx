import useSWR from "swr";
import { UserContext } from "@/context/UserContext";
import React, { useContext, useState } from "react";
import FormWrapper from "../../FormWrapper";
import { DeleteUserRequest } from "@/api/user";
import { DataTable } from "../dataTable/DataTable";
import { RequestsColumns } from "../dataTableColumns/RequestsColumn";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import RequestForm from "../../../components/forms/userForms/RequestForm";
import { UserRequest } from "@/types/Types";
import Button from "@/shared/Button";
// import { UserRequest } from "@/types/Types";

const AllRequests: React.FC = (): JSX.Element => {
  const { user }: any = useContext(UserContext);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [requestToUpdate, setRequestToUpdate] = useState<any>();
  const { toast } = useToast();

  const role: string = user?.role;

  const fetcher = async (url: string): Promise<UserRequest[] | undefined> => {
    const response = await fetch(url);
    const data = await response.json();
    return data?.items;
  };

  const {
    data: requests,
    error,
    isLoading,
  } = useSWR(
    `http://127.0.0.1:8090/api/collections/user_requests/records`,
    fetcher
  );

  const requestsColumns = RequestsColumns(role);

  const deteleRequest = async (requestId: string): Promise<void> => {
    const deletedRequest = await DeleteUserRequest(requestId);
    if (deletedRequest === undefined) {
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
