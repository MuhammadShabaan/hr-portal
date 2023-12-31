import { UserContext } from "@/context/UserContext";
import Button from "@/model/Button";
import { useContext, useState } from "react";
import { FaEdit, FaRemoveFormat } from "react-icons/fa";
import useSWR from "swr";
import FormWrapper from "./FormWrapper";
import UserRequest from "./user/EmpRequest";
import { DeleteUserRequest } from "@/api/user";

const AllRequests = () => {
  const { user }: any = useContext(UserContext);

  const [showEditModel, setShowEditModel] = useState<boolean>(false);

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
            role={user.roles}
          />
        </FormWrapper>
      )}
      {data?.items?.map(
        ({ id, description, status, request_type, note }: any) => (
          <div key={id} className="flex items-center justify-between mb-2">
            <p>{description}</p>
            <p>{status}</p>
            <p>{request_type}</p>
            <p>{note}</p>
            <div className="flex items-center justify-between">
              <Button
                icon={<FaEdit />}
                onClick={() => {
                  setShowEditModel(!showEditModel);
                  setSelectedRequestId(id);
                }}
              />
              <Button
                icon={<FaRemoveFormat />}
                color="red-800"
                onClick={() => deteleRequest(id)}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AllRequests;
