import { UserContext } from "@/context/UserContext";
import Button from "@/model/Button";
import { useContext, useState } from "react";
import { FaEdit, FaRemoveFormat } from "react-icons/fa";
import useSWR from "swr";
import FormWrapper from "./FormWrapper";
import UserRequest from "./user/EmpRequest";
import { DeleteUserRequest } from "@/api/user";
import { DataTable } from "./tables/DataTable";
import { columns } from "./tables/requestsTable/columns";

const AllRequests = () => {
  const { user }: any = useContext(UserContext);

  const [showEditModel, setShowEditModel] = useState<boolean>(false);

  const [success, setSuccess] = useState<boolean>(false);

  console.log("success", success);
  const [selectedRequestId, setSelectedRequestId] = useState<any>();

  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8090/api/collections/user_requests/records`,
    fetcher
  );
  console.log("request", data);

  const deteleRequest = async (requestId: any): Promise<any> => {
    const deletedRequest = await DeleteUserRequest(requestId);
    if (deletedRequest === undefined) {
      console.log(`Request with id:${requestId} deleted successfully!`);
    }
  };

  return (
    <div>
      {showEditModel && (
        <FormWrapper onClick={() => setShowEditModel(!showEditModel)}>
          <UserRequest
            selectedRequestId={selectedRequestId}
            role={user?.roles}
          />
        </FormWrapper>
      )}

      <DataTable
        columns={columns}
        data={data?.items || {}}
        onClick={(id: string) => deteleRequest(id)}
      />
    </div>
  );
};

export default AllRequests;
