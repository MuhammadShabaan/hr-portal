import useSWR from "swr";
import { UserContext } from "@/context/UserContext";
import React, { useContext, useState } from "react";
import FormWrapper from "../../FormWrapper";
import { DeleteUserRequest } from "@/api/user";
import { DataTable } from "../dataTable/DataTable";
import { RequestsColumns } from "../dataTableColumns/RequestsColumn";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
// import { UserRequest } from "@/types/Types";

const AllRequests: React.FC = (): JSX.Element => {
  const { user }: any = useContext(UserContext);
  const [showEditModel, setShowEditModel] = useState<boolean>(false);
  const [selectedRequestId, setSelectedRequestId] = useState<string>("");
  const { toast } = useToast();

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
      {showEditModel && (
        <FormWrapper onClick={(): void => setShowEditModel(!showEditModel)}>
          <UserRequest
            selectedRequestId={selectedRequestId}
            role={user?.roles}
          />
        </FormWrapper>
      )}

      <DataTable
        columns={RequestsColumns}
        data={requests || {}}
        onClick={(id: string) => deteleRequest(id)}
      />
    </div>
  );
};

export default AllRequests;
